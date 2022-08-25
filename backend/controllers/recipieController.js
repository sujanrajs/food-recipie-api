const asyncHandler = require("express-async-handler");

const Recipie = require("../models/recipieModel");

// @desc GET Recipies
// @route GET /api/recipies
// @access Public
const getRecipies = asyncHandler(async (req, res) => {
  const recipies = await Recipie.find();
  res.status(200).json(recipies);
});

// @desc Create Recipie
// @route POST /api/recipies
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

// @desc Update Recipies
// @route PUT /api/recipies/:id
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
// @route DELETE /api/recipies/:id
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

module.exports = { getRecipies, createRecipie, updateRecipie, deleteRecipie };
