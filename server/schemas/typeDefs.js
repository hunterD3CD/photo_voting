const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    title: string
  }
`;

module.exports = typeDefs;
