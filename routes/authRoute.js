const express = require('express');
const {jwt} = require("../controllers/authController");
const router = express.Router();

router.post('/jwt',jwt)

module.exports = router;