import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    blogArticle(name: String): BlogArticle
    blogArticles: [BlogArticle]
  }
  extend type Mutation {
    blogArticleAdd(blogArticle: BlogArticleInput!): Boolean
  }
  type BlogArticle {
    _id: String
    title: String
    shortDescription: String
    data: EditorData
  }
  type EditorData {
    blocks: [Block]
    version: String
    time: Date
  }
  type Block {
    type: String
    data: BlockData
  }
  type BlockData {
    level: Int
    text: String
    items: [String]
    style: String
  }
  input BlogArticleInput {
    _id: String
    title: String
    shortDescription: String
    data: EditorDataInput
  }
  input EditorDataInput {
    blocks: [BlockInput]
    version: String
    time: Date
  }
  input BlockInput {
    type: String
    data: BlockDataInput
  }
  input BlockDataInput {
    level: Int
    text: String
    items: [String]
    style: String
  }
`;
