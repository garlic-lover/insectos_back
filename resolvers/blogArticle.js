export default {
  Query: {
    blogArticle: async (parent, { name }, { models }) => {
      let theArticle = await models.BlogArticle.findOne({
        title: name,
      });
      return theArticle;
    },
    blogArticles: async (parent, args, { models }) =>
      await models.BlogArticle.find(),
  },
  Mutation: {
    blogArticleAdd: async (parent, { blogArticle }, { models }) => {
      try {
        await new models.BlogArticle(blogArticle).save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
