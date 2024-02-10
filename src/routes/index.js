const express = require("express")
const path = require("path") // path module provided by node
const routes = express.Router()
const multer = require("multer")

const upload = multer({ storage });

// Home page route
routes.get("/", (req, res) => {
    res.render("index")
})

// api to upload files
routes.post("/upload", upload.single("file"), (req, res) => {
    res.redirect("/")
})

module.exports = routes