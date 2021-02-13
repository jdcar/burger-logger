
var express = require('express')
var router = express.Router();
var burger = require('../models/burger.js')

// Create the router for the app, and export the router at the end of your file.

router.get("/", function (req, res) {
    // res.send("hello")
    // res.render('index')

    burger.selectAll(function (data, cb) {
        var object = {
            burgers: data
        };
        // object = JSON.stringify(object["burgers"])
        object = object["burgers"]
        console.log(object)
        // res.json(object)
        // res.render('index', {object})
        res.render('index', { object })

    })

})

router.post("/api/burgers", function (req, res) {
    console.log(req.body.burger_name)
    // console.log(req.body.burger_name)

    var burger_name = req.body.burger_name
    // var devoured = req.body.devoured
    burger.insertOne(burger_name),function (result) {
    burger.insertOne([burger_name], [req.body.burger_name], function (result) {


        console.log(result)
    })
    }
})

// burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {


// router.post("/api/cats", function (req, res) {
//     cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function (result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });


module.exports = router;