const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Vote {
    _id: ID
    createdAt: String
    username: string
    voteCount: Int
  }

  type Query {
      users: [User]
      user(username: String!): User
      votes(username: String): [Vote]
      vote(_id; ID!): Vote
  }
`;

module.exports = typeDefs;
