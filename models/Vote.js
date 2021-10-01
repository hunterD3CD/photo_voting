const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const voteSchema = new Schema(
  {
    voteNumber: {
      type: Int,
      required: true,
      maxlength: 1000,
    },
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
