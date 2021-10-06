const { Schema, model } = require("mongoose");
const voteSchema = require("./Vote");
const dateFormat = require("../utils/dateFormat");

const photoSchema = new Schema(
  {
    /*photoText: {
      type: String,
      required: "photo description",
      minlength: 1,
      maxlength: 300,
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
