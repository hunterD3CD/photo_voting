const { User, Photo } = require("../models");
const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const aws = require("aws-sdk");
const s3bucket = process.env.S3_bucket;

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("photos")
          .populate("friends");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("photos")
        .populate("friends");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("photos");
    },
    getAllUserOwnedPhotos: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Photo.find(params).sort({ createdAt: -1 });
    },
    getOnePhoto: async (parent, { _id }) => {
      return Photo.findOne({ _id });
    },
    getAllPhotos: async () => {
      return Photo.find();
    },
    getAllPhotosOfUser: async (parent, username) => {},
  },

  Mutation: {
    signS3: async (parent, { filename, filetype }) => {
      process.env.AWS_ACCESS_KEY_ID;
      process.env.AWS_SECRET_KEY;
      const s3 = new aws.S3({
        signatureVersion: "v4",
        region: process.env.AWS_REGION,
      });

      const s3Params = {
        Bucket: s3Bucket,
        Key: filename,
        Expires: 60,
        ContentType: filetype,
        ACL: "public-read",
      };
      const signedRequest = await s3.getSignedUrl("putObject", s3Params);
      const url = `https://${s3Bucket}.s3.amazonaws.com/${filename}`;

      return {
        signedRequest,
        url,
      };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect login info");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return { token, user };
    },

    addPhoto: async (parent, args, context) => {
      if (context.user) {
        const photo = await Photo.create({
          ...args,
          filename: context.filename,
          photoUrl: contect.photoUrl,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { photos: photo._id } },
          { new: true }
        );

        return photo;
      }

      throw new UserInputError("Invalid photo");
    },
    //adding voteValue
    votePhoto: async (parent, { photoId, voteValue }, context) => {
      if (context.user) {
        const likePhoto = await Photo.findById(photoId);

        if (likePhoto) {
          // find index of votes array that contains the user vote
          const userIndex = likePhoto.votes.findIndex(
            (like) => like.username === username
          );
          // check if we find the userIndex; > -1 means exists, == -1 dne
          if (userIndex > -1) {
            // if we find that user vote
            const userVote = likePhoto.votes[userIndex].voteValue;
            if (userVote === true) {
              likePhoto.votes[userIndex].voteValue = false;
            } else {
              likePhoto.votes[userIndex].voteValue = true;
            }
          } else {
            //adding votevalue to determine whether it's like or dislike
            likePhoto.votes.push({
              username,
              voteValue,
              createdAt: new Date(timestamp),
            });
          }
          // if (likePhoto.votes.find() {
          //   likePhoto = likePhoto.votes.filter(
          //     (like) => votes.username !== username
          //   );
          // } else {
          //   likePhoto.votes.push({ username, createdAt: new Date(timestamp) });
          // }

          await likePhoto.save();
          return likePhoto;
        } else throw new UserInputError("Invalid vote");
      }
    },

    countVote: async (parent, { photoId }) => {
      const photo = await Photo.findById(photoId);
      let likes = 0,
        dislikes = 0;
      photo.votes.forEach((vote) => {
        if (votes.voteValue === true) {
          likes = likes + 1;
          //likes += 1;
          //likes ++;
        } else {
          dislikes++;
        }
      });
      return { likes, dislikes };
    },

    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
