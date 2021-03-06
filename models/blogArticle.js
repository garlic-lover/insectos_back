import mongoose from "mongoose";
var Schema = require("mongoose").Schema;

const BlogArticleSchema = new Schema({
  title: {
    type: String,
    default: "",
  },
  shortDescription: {
    type: String,
    default: "",
  },
  authorName: {
    type: String,
    default: "",
  },
  lang: {
    type: String,
    default: "",
  },
  data: {
    blocks: [
      {
        type: {
          type: String,
          default: "",
        },
        data: {
          type: Object,
          default: {},
        },
      },
    ],
    version: {
      type: String,
      default: "",
    },
    time: {
      type: Number,
      default: "",
    },
  },
});

const BlogArticle = mongoose.model("BlogArticle", BlogArticleSchema);

export default BlogArticle;
