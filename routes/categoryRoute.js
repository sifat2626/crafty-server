const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCraftByCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/categories", getAllCategories);
router.post("/categories", createCategory);
router.get("/categories/:name", getCraftByCategory);
router.delete("/categories/:id", deleteCategory);
router.put("/categories/:id", updateCategory);

module.exports = router;
