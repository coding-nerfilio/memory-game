var express = require("express");
var expressStaticGzip = require("express-static-gzip");
var app = express();

app.use("/", expressStaticGzip("./build/"));

app.listen(8000);
