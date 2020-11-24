import mongoose from "mongoose";

const User = mongoose.model("User", {
  firstName: {
    type: String,
    default: "",
  },
});

export default User;
