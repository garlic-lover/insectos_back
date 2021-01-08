import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    insect(_id: String): Insect
    insects: [Insect]
  }
  extend type Mutation {
    insectAdd(insect: InsectInput): Boolean
  }
  type Insect {
    _id: String
    order: Order
    family: String
    specie: String
    genus: String
    commonNames: [String]
    estados: [Estado]
  }
  input InsectInput {
    _id: String
    order: OrderInput
    family: String
    specie: String
    genus: String
    commonNames: [String]
    estados: [String]
  }
  type Order {
    main: String
    sub: String
  }
  input OrderInput {
    main: String
    sub: String
  }
`;
