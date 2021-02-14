// connect mysql
const mysql = require('mysql')
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: 'qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gbk3xj2bi7veu730',
        password: 'trwe29vdq4rvc7k6',
        database: 'eivafy114l2758wf'
    })
}
}

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'burgers_db',
//     password: 'root',
// });
connection.connect(err => {
    if (err) throw err
    // console.log(`MySQL connected on ${connection.threadId}`)
});

module.exports = connection