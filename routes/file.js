FileController = require("../controller/file");

module.exports = (server) => {
  server.post("/file", FileController.create);
  server.delete("/file/:name", FileController.delete);
  server.post("/file/move", FileController.move);
};
