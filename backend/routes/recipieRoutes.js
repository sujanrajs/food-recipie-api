const express = require("express");
const router = express.Router();

const {
  getRecipie,
  createRecipie,
  updateRecipie,
  deleteRecipie,
} = require("../controllers/recipieController");

router.route("/").get(getRecipie).post(createRecipie);
router.route("/:id").put(updateRecipie).delete(deleteRecipie);

/* router.get("/", getRecipie);
router.post("/", createRecipie);
router.put("/:id", updateRecipie);
router.delete("/:id", deleteRecipie); */

module.exports = router;
