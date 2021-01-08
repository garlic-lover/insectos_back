import mongoose from "mongoose";

const Insect = mongoose.model("Insect", {
  phylum: {
    type: String,
    default: "Arthropoda",
  },
  class: {
    type: String,
    default: "Insecta",
  },
  order: {
    main: {
      type: String,
      default: "",
    },
    sub: {
      type: String,
      default: "",
    },
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
  eatableStates: [{ type: String }],
  isSold: { type: Boolean },
  isAutoConsumed: { type: Boolean },
  isComestible: { type: Boolean },
  isMedicinal: { type: Boolean },
  isTradicional: { type: Boolean },
  notes: { type: String },
  references: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
      clave: { type: String },
    },
  ],
});

export default Insect;
