const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const voteSchema = new Schema(
  {
    voteValue: {
      type: Boolean,
      required: true,
    },

    /* voteNumber: {
      type: Number,
      required: true,
      sumOfScore: Float,
    },*/

    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = voteSchema;
