
var express = require('express')
var router = express.Router();
var burger = require('../models/burger.js')

// Create the router for the app, and export the router at the end of your file.

router.get("/", function (req, res) {
    res.send("hello")
    // burger.selectAll(function(data) {
    //     var object = {
    //         burger:data
    //     };
    //     console.log(object)
    //     // res.json(object)
    //     res.render("index", object)
    // })


})

module.exports = router;