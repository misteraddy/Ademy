const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerUser: registerUserRepository } = require("../repositories/authRepository");
const User = require("../schema/User");

const registerUserService = async ({ userName, userEmail, password, role }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await registerUserRepository({
      userName,
      userEmail,
      password: hashedPassword,
      role,
    });

    return user;
  } catch (error) {
    throw new Error(`Service error: ${error.message}`);
  }
};

const loginUserService = async ({ userEmail, password }) => {
  try {
    const user = await User.findOne({ userEmail });

    if (!user) {
      throw new Error("User does not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        userEmail: user.userEmail,
        userName: user.userName,
        role: user.role,
      },
      process.env.JWT_SECRET || "JWT_SECRET",
      { expiresIn: "120m" }
    );

    return {
      user: {
        _id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        role: user.role,
      },
      accessToken,
    };
  } catch (error) {
    throw new Error(`Login service error: ${error.message}`);
  }
};

module.exports = {
  registerUserService,
  loginUserService,
};
