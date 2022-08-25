const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Recipie" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create Recipie" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Recipie ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Recipie ${req.params.id}` });
});

module.exports = router;
