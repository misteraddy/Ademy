const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3001;

const MONGO_URI = process.env.MONGO_URI;

const CLIENT_URL = process.env.CLIENT_URL;

module.exports = { PORT, MONGO_URI, CLIENT_URL };
