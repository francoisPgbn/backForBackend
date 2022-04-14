ShellController = require("../controller/shell");

module.exports = (server) => {
  server.post("/shell", ShellController.executeCommand);
};
