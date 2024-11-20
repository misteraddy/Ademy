
const User = require("../schema/User");
const { registerUserService } = require("../services/authService");
const { errorResponse, createdResponse } = require("../utils/responseHandler");

const registerUserController = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;

  try {
    
    const existingUser = await User.findOne({
      $or: [{ userName: userName }, { userEmail: userEmail }],
    });

    if (existingUser) {
      return errorResponse(res, "User with this username or email already exists", 409);
    }

    const user = await registerUserService({ userName, userEmail, password, role });

    const { password: _, ...userWithoutPassword } = user.toObject();

    return createdResponse(res, userWithoutPassword, "User created successfully");
  } catch (error) {
    return errorResponse(res, error.message, error.status || 500);
  }
};

module.exports = {
  registerUserController,
};
