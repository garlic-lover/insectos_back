import mongoose from "mongoose";
var Schema = require("mongoose").Schema;

const EstadoSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  state_code: { type: String, default: "" },
  insects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Insect" }],
});

EstadoSchema.index({ state_code: 1 });

const Estado = mongoose.model("Estado", EstadoSchema);

export default Estado;
