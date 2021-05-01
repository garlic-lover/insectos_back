import { gql } from "apollo-server-express";

import userSchema from "./user";
import estadoSchema from "./estado";
import insectSchema from "./insect";
import blogArticleSchema from "./blogArticle";
import articleSchema from "./article";

const linkSchema = gql`
  scalar Date
  scalar JSON
  scalar JSONObject

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  estadoSchema,
  insectSchema,
  blogArticleSchema,
  articleSchema,
];
