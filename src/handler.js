const lectures = require("./lectures");
const responseBuilder = require("./response");

const getAllLecturesHandler = (rq, h) => {
  if (lectures.length > 0) {
    const response = h.response({
      status: "success",
      data: {
        lectures: lectures.map((lecture) => ({
          id: lecture.id,
          kode: lecture.kode,
          nama: lecture.nama,
          sks: lecture.sks,
          ujian: lecture.ujian,
          kelas: lecture.kelas,
        })),
      },
    });
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: "success",
      data: {
        lectures: [],
      },
    });
    response.code(200);
    return response;
  }
};

const testHandler = (rq, h) => {
  const response = responseBuilder(h, "Success", "Done and Dusted", 200);
  return response;
};

// DISABLED BECAUSE DATA IS CRAWLED AUTOMATICALLY
// NOT INPUTTED MANUALLY

// const addLectureHandler = (rq, h) => {
//   const { id, kode, nama, sks, ujian } = rq.payload;

//   lectures.push(rq.payload);
//   const response = h.response({
//     status: "success",
//     message: "Berhasil Menambahkan mata kuliah",
//   });

//   response.code(200);
//   return response;
// };

module.exports = {
  getAllLecturesHandler,
  testHandler,
};
