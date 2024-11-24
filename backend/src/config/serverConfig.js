const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3001;

const MONGO_URI = process.env.MONGO_URI;

const CLIENT_URL = process.env.CLIENT_URL;

const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

const FOLDER_NAME = process.env.FOLDER_NAME;

module.exports = {
  PORT,
  MONGO_URI,
  CLIENT_URL,
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET,
  FOLDER_NAME,
};
