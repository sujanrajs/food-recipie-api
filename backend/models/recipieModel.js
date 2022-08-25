const mongoose = require("mongoose");

const recipieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipie", recipieSchema);
