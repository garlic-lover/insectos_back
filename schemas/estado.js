import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    estado(state_code: String): Estado
    estados: [Estado]
  }
  type Estado {
    _id: String
    name: String
    state_code: String
    insects: [Insect]
  }
`;
