const express = require("express");
const {
  registerUserController,
  loginUserController,
  checkAuthController, // Ensure this is imported
} = require("../controllers/authController");
const authenticateMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);

// Pass checkAuthController as a callback function
router.get("/check-auth", authenticateMiddleware, checkAuthController);

module.exports = router;
