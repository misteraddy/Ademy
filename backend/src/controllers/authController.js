const {
  registerUserService,
  loginUserService,
} = require("../services/authService");
const {
  errorResponse,
  createdResponse,
  successResponse,
} = require("../utils/responseHandler");
const User = require("../schema/User");

const registerUserController = async (req, res) => {

  const { userName, userEmail, password, role } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ userName }, { userEmail }],
    });

    if (existingUser) {
      return errorResponse(
        res,
        "User with this username or email already exists",
        409
      );
    }

    const user = await registerUserService({
      userName,
      userEmail,
      password,
      role,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();

    return createdResponse(
      res,
      userWithoutPassword,
      "User created successfully"
    );
  } catch (error) {
    return errorResponse(res, error.message, error.status || 500);
  }
};

const loginUserController = async (req, res) => {
  const { userEmail, password } = req.body;

  try {
    const { user, accessToken } = await loginUserService({
      userEmail,
      password,
    });

    return successResponse(res, { user, accessToken }, "Login successful");
  } catch (error) {
    return errorResponse(res, error.message, error.status || 500);
  }
};


const checkAuthController = (req, res) => {
  const user = req.user;

  return successResponse(res, { user }, "Authenticated user!");
};

module.exports = {
  registerUserController,
  loginUserController,
  checkAuthController,
};
