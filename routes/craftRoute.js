const express = require("express");
const {
  createCraft,
  getAllCrafts,
  getCraft,
  updateCraft,
  deleteCraft,
} = require("../controllers/craftController");
const router = express.Router();

router.get("/crafts", getAllCrafts);
router.post("/crafts", createCraft);
router.get("/crafts/:id", getCraft);
router.put("/crafts/:id", updateCraft);
router.delete("/crafts/:id", deleteCraft);

module.exports = router;
