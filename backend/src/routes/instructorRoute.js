const express = require("express");
const { uploadMediaToCloudinary } = require("../utils/cloudinary");
const multer = require("multer");
const { uploadController, deleteController } = require("../controllers/cloudinaryController");



const router = express.Router();

const upload = multer({dest:"uploads/"});

router.post("/upload",upload.single("file"),uploadController);

router.delete("/delete/:id",deleteController);

module.exports = router ;