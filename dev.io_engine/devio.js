var express = require("express");
var port = 8883;
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mochitoBuild = require("./mochito_modules/fs_operations.js");
//var templateEngine = require("./mochito_modules/templateEngine.js");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/generateProject", (req, res) => {
  mochitoBuild
    .applyProjectConfig(
      `${process.cwd()}/src/dev.io_config/config.json`,
      req.body.config
    )
    .then(function (response) {
      mochitoBuild
        .applyProjectConfig(
          `${process.cwd()}/src/dev.io_config/route.json`,
          req.body.route
        )
        .then(function (response) {
          res.send("200");
        });
    });
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () =>
  console.log("Example app listening on port" + port + "!")
);
