require("dotenv")
const mysql = require("mysql2/promise")
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE} = process.env

const pool = mysql.createPool({
    user: DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    port:DB_PORT,
    database:DB_DATABASE
})

module.exports = pool

