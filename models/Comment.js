const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const voteSchema = require("./Vote");

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: "any comments for the photos",
      minlength: 1,
      maxlength: 500,
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

    votes: [voteSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

commentSchema.virtual("voteCount").get(function () {
  return this.votes.length;
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
