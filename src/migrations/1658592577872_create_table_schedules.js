module.exports = {
  up:
    "CREATE TABLE schedules (" +
    "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ," +
    "id_kp varchar(255) ," +
    "kode_kp varchar(255) ," +
    "hari varchar(255) ," +
    "waktuMulai varchar(255)," +
    "waktuBerakhir varchar(255)" +
    ");",
  down: "DROP TABLE schedules",
};
