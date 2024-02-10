const express = require("express")
const path = require("path") // path module provided by node
const routes = express.Router()
const multer = require("multer")
const { storage } = require("./../app")

// the default destination to upload files
const upload = multer({ storage })

// Home page route
routes.get("/", (req, res) => {
    res.render("index")
})

// api to upload files
routes.post("/upload", upload.single("file"), (req, res) => {

    if (req.file) {
        console.log('File uploaded:', req.file);
    } else {
        console.log('No file uploaded');
    }

    res.redirect("/")
})

module.exports = routes