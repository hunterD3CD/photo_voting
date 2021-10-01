const { User, Vote } = require("../models");

const resolvers = {
  Query: {
    votes: async () => {
      return Vote.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
