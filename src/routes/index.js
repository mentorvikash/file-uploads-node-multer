const express = require("express")
const path = require("path") // path module provided by node
const routes = express.Router()
const multer = require("multer")
// const { storage } = require("./../app")

// Set up middleware for handling file uploads
const storage = multer.diskStorage({
    destination: path.join(__dirname, './../../uploads'),
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// the default destination to upload files
const upload = multer({ storage })

// Home page route
routes.get("/", (req, res) => {
    res.render("index", { "files": [] })
})

// api to upload files
routes.post("/upload", upload.single("file"), (req, res) => {

    if (req.file) {
        console.log('File uploaded:', req.file);

        // Pass the file information to the view
        const uploadedFile = {
            filename: req.file.filename,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        };

        res.render("index", { files: [uploadedFile] });
    } else {
        console.log('No file uploaded');
        res.redirect("/");
    }
})

module.exports = routes