export default {
  Query: {
    estado: async (parent, { state_code }, { models }) => {
      let list = await models.Estado.find({ state_code: state_code }).populate(
        "insects"
      );
      return list[0];
    },
    estados: async (parent, args, { models }) =>
      await models.Estado.find().populate("insects"),
  },
};
