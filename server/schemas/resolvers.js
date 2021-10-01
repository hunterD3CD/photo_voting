const { User, Comment } = require("../models");

const resolvers = {
  Query: {
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
  },
};

module.exports = resolvers;
