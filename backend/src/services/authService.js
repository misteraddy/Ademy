const { registerUser: registerUserRepository } = require("../repositories/authRepository");
const bcrypt = require("bcryptjs");

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

module.exports = {
  registerUserService,
};
