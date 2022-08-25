// @desc GET Recipie
// @route GET /api/recipie
// @access Public
const getRecipie = (req, res) => {
  res.status(200).json({ message: "Get Recipie" });
};

// @desc Create Recipie
// @route POST /api/recipie
// @access Public
const createRecipie = (req, res) => {
  res.status(200).json({ message: "Create Recipie" });
};

// @desc Update Recipie
// @route PUT /api/recipie
// @access Public
const updateRecipie = (req, res) => {
  res.status(200).json({ message: `Update Recipie ${req.params.id}` });
};

// @desc Delete Recipie
// @route DELETE /api/recipie
// @access Public
const deleteRecipie = (req, res) => {
  res.status(200).json({ message: `Delete Recipie ${req.params.id}` });
};

module.exports = { getRecipie, createRecipie, updateRecipie, deleteRecipie };
