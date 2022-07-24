const { getAllLecturesHandler, testHandler } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/lectures",
    handler: getAllLecturesHandler,
  },
  {
    method: "GET",
    path: "/test",
    handler: testHandler,
  },
];

module.exports = routes;
