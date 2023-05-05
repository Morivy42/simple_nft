const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// Set up multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Route to handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Error: No file uploaded" });
  }

  const { originalname, size, mimetype, filename } = req.file;
  console.log(`File uploaded: ${originalname}, size: ${size}, type: ${mimetype}`);

  res.json({ message: "File uploaded successfully" });
});

// Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

// Start server
const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
