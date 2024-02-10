// import 
const express = require("express")
const multer = require("multer")
const path = require("path")
require("dotenv").config()

// creating our node application
const app = express()

// Define port
const port = process.env.PORT

// set the static folder
app.use(express.static("public"))
// set the default encoder provided by express
app.use(express.urlencoded({ extended: true }))

// set our view engine as EJS
app.set("view engine", "ejs")

// importing the routes and create api endpoint
const indexRoutes = require("./routes/index")
app.use("/", indexRoutes);

// Let check our server
app.listen(port, () => {
    console.log("server is running at " + port)
})
