const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type S3Payload {
    signedRequest: String!
    url: String!
  }

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
    name: String!
    pictureUrl: String!
    username: String
    createdAt: String
    users: [User]
    voteCount: Int
    votes: [Vote]
  }

  type Vote {
    _id: ID
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    getAllPhotos: [Photo]
    getAllPhotosOfUser(users: ID!): [Photo]
    getAllUserOwnedPhotos(username: String): [Photo]
    getOnePhoto(_id: ID!): Photo
  }

  type Mutation {
    signS3(filename: String!, filetype: String!): S3Payload!
    login(email: String!, password: String!): Auth
    addPhoto(name: String!, pictureUrl: String!): Photo
    addUser(username: String!, email: String!, password: String!): Auth
    votePhoto(photoId: ID!, voteValue: Boolean!): Photo
    countVote(photoId: ID!): Photo
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
