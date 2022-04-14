const fs = require("fs");
var path = require("path");

module.exports = {
  create(req, rsp) {
    const name = req.body.name;
    var filePath = path.join(__dirname, "..", "data", name);

    fs.writeFile(filePath, "", (err) => {
      if (err) rsp.send(err);
      rsp.send({ success: true });
    });
  },

  delete(req, rsp) {
    const name = req.params.name;
    var filePath = path.join(__dirname, "..", "data", name);
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
    });
    rsp.send({ success: true });
  },

  move(req, rsp) {
    const oldFile = req.body.oldFile;
    const newFile = req.body.newFile;
    var oldPath = path.join(__dirname, "..", "data", oldFile);
    var newPath = path.join(__dirname, "..", "data", newFile);
    fs.rename(oldPath, newPath, (err) => {
      if (err) rsp.send(err);
      rsp.send({ success: true });
    });
  },
};
