const express = require("express")
const routes = express.Router()

routes.get("/", (req, res) => {
    res.send("welcome to home page")
})




module.exports = routes