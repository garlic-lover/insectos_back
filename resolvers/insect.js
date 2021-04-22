export default {
  Query: {
    insect: async (parent, { specie }, { models }) => {
      return await models.Insect.findOne({ specie: specie }).populate(
        "estados"
      );
    },
    insects: async (parent, { filter }, { models }) => {
      let toFilter = {};
      if (filter.order !== "-") {
        toFilter["order.main"] = filter.order;
      }
      if (filter.estado !== "-") {
        toFilter.estados = filter.estado;
      }
      return await models.Insect.find(toFilter)
        /*  .skip(5)
        .limit(10) */
        .populate("estados");
    },
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
