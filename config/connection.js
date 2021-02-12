// connect mysql
const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burgers_db',
    password: 'root',
});
connection.connect(err => {
    if (err) throw err
    // console.log(`MySQL connected on ${connection.threadId}`)
});

module.exports = connection