const fs = require("fs");

let raw_mk = fs.readFileSync("src/data/mk_split.json");
let mk = JSON.parse(raw_mk);

let raw_kp = fs.readFileSync("src/data/kp_split.json");
let kp = JSON.parse(raw_kp);

let raw_schedule = fs.readFileSync("src/data/jadwal_split.json");
let jadwal = JSON.parse(raw_schedule);

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

  mk.forEach((e) => {
    var sql = `INSERT INTO lectures (id_matkul, kode_matkul, nama, sks, ujian) VALUES ('${e.id}', '${e.kode}','${e.nama}','${e.sks}','${e.ujian}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("mk record inserted");
    });
  });

  kp.forEach((e) => {
    var sql = `INSERT INTO classes (id_kp, id_mk, kode, kuota) VALUES ('${e.id_kp}', '${e.id_mk}','${e.kode}','${e.kuota}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("kp record inserted");
    });
  });
  jadwal.forEach((e) => {
    var sql = `INSERT INTO schedules (id_kp, kode_kp,hari, waktuMulai, waktuBerakhir) VALUES ('${e.id_kp}', '${e.kode_kp}','${e.hari}','${e.waktuMulai}','${e.waktuBerakhir}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("jadwal record inserted");
    });
  });
});
