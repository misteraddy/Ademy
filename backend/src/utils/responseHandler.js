const successResponse = (res, data, message = "") => {
  return res.status(200).json({
    success: true,
    data,
    message,
  });
};

const createdResponse = (res, data, message = "") => {
  return res.status(201).json({
    success: true,
    data,
    message,
  });
};

const notFoundResponse = (res, message = "Resource not found") => {
  return res.status(404).json({
    success: false,
    message,
  });
};

const errorResponse = (
  res,
  message = "Internal Server Error",
  status = 500
) => {
  return res.status(status).json({
    success: false,
    message,
  });
};

module.exports = {
  successResponse,
  createdResponse,
  notFoundResponse,
  errorResponse,
};
