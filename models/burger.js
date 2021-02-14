// const { selectAll } = require('../config/orm.js')
const orm = require('../config/orm.js')

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(cb) {
        orm.insertOne(cb, function (res) {
            cb(res)
        })
    },
    updateOne: function(cb) {
        orm.updateOne(cb, function (res) {
            cb(res)
        })
    },
    deleteOne: function(cb) {
        orm.deleteOne(cb, function (res) {
            cb(res)
        })
    }
}

module.exports = burger
