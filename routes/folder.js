FolderController = require("../controller/folder");

module.exports = (server) => {
  server.get("/folder", FolderController.list);
  server.post("/folder", FolderController.create);
  server.delete("/folder/:name", FolderController.delete);
};
