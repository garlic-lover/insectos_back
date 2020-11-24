export default {
  Query: {
    user: async (parent, args, { user, models }) => await models.Lot.find(),
  },
};
