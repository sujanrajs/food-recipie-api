const asyncHandler = require("express-async-handler");

const Recipie = require("../models/recipieModel");

// @desc GET Recipie
// @route GET /api/recipie
// @access Public
const getRecipie = asyncHandler(async (req, res) => {
  const recipie = await Recipie.find();
  res.status(200).json(recipie);
});

// @desc Create Recipie
// @route POST /api/recipie
// @access Public
const createRecipie = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name");
  }

  const recipie = await Recipie.create({
    name: req.body.name,
  });

  res.status(200).json({ message: "Create Recipie" });
});

// @desc Update Recipie
// @route PUT /api/recipie
// @access Public
const updateRecipie = asyncHandler(async (req, res) => {
  const recipie = await Recipie.findById(req.params.id);

  if (!recipie) {
    res.status(400);
    throw new Error("Recipie not found");
  }

  const updatedRecipie = await Recipie.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedRecipie);
});

// @desc Delete Recipie
// @route DELETE /api/recipie
// @access Public
const deleteRecipie = asyncHandler(async (req, res) => {
  const recipie = await Recipie.findById(req.params.id);

  if (!recipie) {
    res.status(400);
    throw new Error("Recipie not found");
  }

  await recipie.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getRecipie, createRecipie, updateRecipie, deleteRecipie };
