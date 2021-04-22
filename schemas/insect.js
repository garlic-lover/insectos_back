import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    insect(specie: String): Insect
    insects(filter: FilterInput): [Insect]
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
    references: [Reference]
    eatableStates: [String]
    isSold: Boolean
    isAutoConsummed: Boolean
    notes: String
    isComestible: Boolean
    isMedicinal: Boolean
    isTradicional: Boolean
  }
  input InsectInput {
    _id: String
    order: OrderInput
    family: String
    specie: String
    genus: String
    commonNames: [String]
    estados: [String]
    eatableStates: [String]
    isSold: Boolean
    isAutoConsummed: Boolean
    notes: String
    isComestible: Boolean
    isMedicinal: Boolean
    isTradicional: Boolean
  }
  type Order {
    main: String
    sub: String
  }
  input OrderInput {
    main: String
    sub: String
  }
  type Reference {
    clave: String
    _id: String
  }
  input FilterInput {
    order: String
    estado: String
    search: String
  }
`;
