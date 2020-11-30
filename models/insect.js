import mongoose from "mongoose";

const Insect = mongoose.model("Insect", {
  phylum: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
  order: {
    type: String,
    default: "",
  },
  family: {
    type: String,
    default: "",
  },
  genus: {
    type: String,
    default: "",
  },
  specie: {
    type: String,
    default: "",
  },
  commonNames: {
    type: Array,
    default: [],
  },
  estados: [{ type: mongoose.Schema.Types.ObjectId, ref: "Estado" }],
});

export default Insect;
