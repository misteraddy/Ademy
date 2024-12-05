const { errorResponse } = require("../utils/responseHandler");
const jwt = require("jsonwebtoken");

const verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error("Invalid token");
  }
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return errorResponse(res, "User is not authenticated", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyToken(token, process.env.JWT_SECRET || "JWT_SECRET");
    req.user = payload;
    next();
  } catch (error) {
    return errorResponse(res, "Invalid token", 403);
  }
};

module.exports = authenticate;
