import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    insect(_id: String): Insect
    insects: [Insect]
  }
  extend type Mutation {
    insectAdd(commonName: String, estado: String): Boolean
  }
  type Insect {
    _id: String
    commonNames: [String]
  }
`;
