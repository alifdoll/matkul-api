const fs = require("fs");
let raw = fs.readFileSync("src/data/data.json");
let data = JSON.parse(raw);

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lecture_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  data.forEach((e) => {
    var sql = `INSERT INTO lectures (id_matkul, kode_matkul, nama, sks, ujian) VALUES ('${e.id}', '${e.kode}','${e.nama}','${e.sks}','${e.ujian}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});
