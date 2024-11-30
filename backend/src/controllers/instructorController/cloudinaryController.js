const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../utils/cloudinary");
const { errorResponse, successResponse } = require("../../utils/responseHandler");

const uploadController = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file); 

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await uploadMediaToCloudinary(req.file.path);
    return successResponse(res, result, "File Uploaded Successfully");
  } catch (error) {
    console.log("Error uploading file:", error);
    return errorResponse(res, "Failed to upload file. Please try again.");
  }
};


const deleteController = async (req, res) => {
  try {
    const public_id = req.params;

    if (!public_id) {
      return errorResponse(res, "Public ID is required to delete the file.");
    }

    const result = await deleteMediaFromCloudinary(public_id);

    return successResponse(res, result, "File Deleted Successfully");
  } catch (error) {
    console.log("Error deleting file:", error);

    return errorResponse(res, "Failed to delete file. Please try again.");
  }
};

module.exports = { uploadController, deleteController };
