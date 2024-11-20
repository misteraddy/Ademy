
const express = require("express");
const { registerUserController } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", registerUserController);

module.exports = router;
