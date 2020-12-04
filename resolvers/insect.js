export default {
  Query: {
    insect: async (parent, { _id }, { models }) =>
      await models.Insect.findById(_id),
    insects: async (parent, args, { models }) => await models.Insect.find(),
  },
  Mutation: {
    insectAdd: async (parent, { insect }, { models }) => {
      try {
        console.log(insect);
        // First, save the insect
        const newInsect = new models.Insect(insect);
        let savedInsect = await newInsect.save();

        // Then, add the insect to the estado
        let estado = insect.estados[0];
        let theState = await models.Estado.findById(estado);
        theState.insects = [...theState.insects, savedInsect._id];
        await theState.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
