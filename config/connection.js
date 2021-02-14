// connect mysql
const mysql = require('mysql')
// var connection;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burgers_db',
    password: 'root',
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
}

connection.connect(err => {
    if (err) throw err
    // console.log(`MySQL connected on ${connection.threadId}`)
});

module.exports = connection