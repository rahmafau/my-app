const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'socmed',
    password: 'Nikah010820.',
    charset: "utf8mb4_unicode_ci"
})

module.exports = db