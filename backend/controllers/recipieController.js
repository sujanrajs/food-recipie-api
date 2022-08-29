const asyncHandler = require("express-async-handler");

const Recipie = require("../models/recipieModel");

// @desc GET Recipies
// @route GET /api/recipies
// @access Public
const getRecipies = asyncHandler(async (req, res) => {
  try {
    const recipies = await Recipie.find();
    res.status(200).json(recipies);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to fetch recipie" });
  }
});

// @desc Create Recipie
// @route POST /api/recipies
// @access Public
const createRecipie = asyncHandler(async (req, res) => {
  try {
    const recipie = await Recipie.create({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
    });
    res.status(200).json(recipie);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create recipie" });
  }
});

// @desc Update Recipies
// @route PUT /api/recipies/:id
// @access Public
const updateRecipie = asyncHandler(async (req, res) => {
  try {
    const recipie = await Recipie.findById(req.params.id);
    const updatedRecipie = await Recipie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedRecipie);
  } catch {
    res.status(400).json({ message: "Recipie not found" });
  }
});

// @desc Delete Recipie
// @route DELETE /api/recipies/:id
// @access Public
const deleteRecipie = asyncHandler(async (req, res) => {
  try {
    const recipie = await Recipie.findById(req.params.id);
    await recipie.remove();
    res.status(200).json({ id: req.params.id, message: "Deleted!" });
  } catch {
    res.status(400).json({ message: "Recipie not found" });
  }
});

module.exports = { getRecipies, createRecipie, updateRecipie, deleteRecipie };
