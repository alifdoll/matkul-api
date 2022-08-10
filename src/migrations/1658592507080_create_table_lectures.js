module.exports = {
  up:
    "CREATE TABLE lectures (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
    "id_matkul varchar(255)" +
    ", kode_matkul varchar(255), " +
    "nama varchar(255)," +
    "sks int, ujian varchar(255))",
  down: "DROP TABLE lectures",
};
