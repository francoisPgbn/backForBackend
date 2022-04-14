const express = require("express");
const routeFolder = require("./routes/folder");
const routeFile = require("./routes/file");
const routeShell = require("./routes/shell");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

routeFile(app);
routeFolder(app);
routeShell(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
