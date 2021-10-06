const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    photos: [Photo]
    votes: [Vote]
    friends: [User]
  }

  type Photo {
    _id: ID
    createdAt: String
    username: String
    voteCount: Int
    votes: [Vote]
    likes: Int
    dislikes: Int
  }

  type Vote {
    _id: ID
    createdAt: String
    username: String
    voteValue: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    photos(username: String): [Photo]
    photo(_id: ID!): Photo
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPhoto(photoId: ID!): Photo
    votePhoto(photoId: ID!, voteValue: Boolean!): Photo
    countVote(photoId: ID!): Photo
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
