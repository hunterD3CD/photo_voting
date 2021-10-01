const { User, Comment } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('comments')
            .populate('friends');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
    },

    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("comments")
        .populate("friends");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("comments");
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    Comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
  },
};

module.exports = resolvers;
