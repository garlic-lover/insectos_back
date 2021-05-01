import { gql } from "apollo-server-express";

export default gql`
  type Article {
    _id: String
    clave: String
    authors: [String]
    date: String
    name: String
    journal: String
    volume: String
    number: String
    editorial: String
    pages: Pages
  }

  type Pages {
    from: String
    to: String
  }
`;
