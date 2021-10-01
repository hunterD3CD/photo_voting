const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    comments: [Comment]
    votes: [Vote]
    friends: [User]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    voteCount: Int
    votes: [Vote]
  }


  type Vote {
    _id: ID
    createdAt: String
    username: string
 
  }

  type Query {
      users: [User]
      user(username: String!): User
      comments(username: String): [Comment]
      comment(_id; ID!): Comment
  }
`;

module.exports = typeDefs;
