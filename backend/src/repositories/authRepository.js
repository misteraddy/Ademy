const User = require("../schema/User");

const registerUser = async ({ userName, userEmail, password, role }) => {
  try {
    const user = await User.create({
      userName,
      userEmail,
      password,
      role,
    });
    return user;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

module.exports = {
  registerUser,
};
