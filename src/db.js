const mysql = require("mysql");
const migration = require("mysql-migrations");

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lecture_db",
});

migration.init(con, __dirname + "/migrations");
