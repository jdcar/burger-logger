
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


        // console.log(result)
    })
    }
})

router.put("/api/burgers/:id", function (req, res){
    console.log(req.params.id)
    burger.updateOne([req.params.id], req.params.id), function (result) {
        
    }
    // console.log(res.json())
})


module.exports = router;