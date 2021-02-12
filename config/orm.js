const connection = require("./connection.js")

// console.log(connection)

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


const orm = {
    selectAll: function (tableName) {
        connection.query('SELECT * FROM ??', tableName,function(err, data) {
            if (err) throw err
            console.log(data)
        })
    },
    insertOne: function (burger_name, devoured) {
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);`, [burger_name, devoured], (err, data) => {
            if (err) throw err
            console.table(data)
        })
    },
    updateOne: function (devoured, burger_name) {
        var sql = `UPDATE burgers SET devoured= ? WHERE burger_name = "?"`
        connection.query(sql, [devoured, burger_name], function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });

    }
}


// }
// Export the ORM object in module.exports.
module.exports = orm;
