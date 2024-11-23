const express = require("express");
const {
  registerUserController,
  loginUserController,
} = require("../controllers/authController");
const authenticateMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/signup", registerUserController);

router.post("/login", loginUserController);

router.get("/check-auth", authenticateMiddleware, (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: {
      user,
    },
  });
});

module.exports = router;
