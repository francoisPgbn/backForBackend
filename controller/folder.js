const fs = require("fs");
var path = require("path");

module.exports = {
  list(req, rsp) {
    fs.readdir("./data", (err, files) => {
      rsp.send(files);
    });
  },

  create(req, rsp) {
    const name = req.body.name;
    var dataPath = path.join(__dirname, "..", "data", name);

    if (fs.existsSync(dataPath)) {
      rsp.send("Done");
    } else {
      fs.mkdir(dataPath, (err) => {
        if (err) {
          rsp.send(err);
        }
        rsp.send("Done");
      });
    }
  },

  delete(req, rsp) {
    const name = req.params.name;
    var dataPath = path.join(__dirname, "..", "data", name);

    fs.readdirSync(dataPath).forEach((fileName) => {
      fs.unlinkSync(path.join(dataPath, fileName), (err) => {
        if (err) console.log(err);
      });
    });

    fs.rmdir(dataPath, (err) => {
      if (err) {
        rsp.send(err);
      }
      rsp.send("Done");
    });
  },
};
