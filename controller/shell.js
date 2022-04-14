const cp = require("child_process");

module.exports = {
  executeCommand(req, rsp) {
    cmd = req.body.cmd;
    cp.exec(cmd, (err, data, stderr) => {
      if (err) console.log(err);
      rsp.send("Done");
    });
  },
}