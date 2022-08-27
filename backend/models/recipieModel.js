const mongoose = require("mongoose");

const recipieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
    ingredients: {
      type: Array,
      required: [true, "Please add ingredients"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipie", recipieSchema);
