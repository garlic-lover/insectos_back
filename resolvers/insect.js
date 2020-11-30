export default {
  Query: {
    insect: async (parent, { _id }, { models }) =>
      await models.Insect.findById(_id),
    insects: async (parent, args, { models }) => await models.Insect.find(),
  },
  Mutation: {
    insectAdd: async (parent, { commonName, estado }, { models }) => {
      console.log("estado", commonName, estado);
      try {
        const newInsect = new models.Insect({
          commonNames: [commonName],
          estados: [estado],
        });
        let insect = await newInsect.save();
        let theState = await models.Estado.findById(estado);
        console.log(theState, estado);
        theState.insects = [...theState.insects, insect._id];
        await theState.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
