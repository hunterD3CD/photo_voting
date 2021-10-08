const { Schema, model } = require("mongoose");
const voteSchema = require("./Vote");
const dateFormat = require("../utils/dateFormat");

const photoSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },

    pictureUrl: {
      type: String,
      required: true,
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

    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    votes: [voteSchema],
  },

  {
    toJSON: {
      getters: true,
    },
  }
);

photoSchema.virtual("photoLikeCount").get(function () {
  return this.votes.length;
});

const Photo = model("Photo", photoSchema);

module.exports = Photo;
