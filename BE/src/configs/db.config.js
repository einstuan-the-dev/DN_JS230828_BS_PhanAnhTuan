const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "library",
  port: 3306,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
});

module.exports = connection;
