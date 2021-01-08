import mongoose from "mongoose";
var Schema = require("mongoose").Schema;

const ArticleSchema = new Schema({
  clave: {
    type: String,
    default: "",
  },
  authors: {
    type: Array,
    default: [],
  },
  date: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  journal: {
    type: String,
    default: "",
  },
  volume: {
    type: String,
    default: "",
  },
  number: {
    type: String,
    default: "",
  },
  editorial: {
    type: String,
    default: "",
  },
  pages: {
    from: { type: Number },
    to: { type: Number },
  },
});

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
