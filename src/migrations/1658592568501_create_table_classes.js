module.exports = {
  up:
    "CREATE TABLE classes (" +
    "id_kp varchar(255) PRIMARY KEY," +
    "id_mk varchar(255)," +
    "kode varchar(255)," +
    "kuota varchar(255)" +
    ");",
  down: "DROP TABLE classes",
};
