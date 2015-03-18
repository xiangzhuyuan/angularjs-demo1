var gzippo = require('gzippo');
var express = require('express');
var app = express();

var logger = require('morgan');
app.use(logger('dev')); //replaces your app.use(express.logger());

app.use(gzippo.staticGzip("" + __dirname__ + "/dist"));
app.listen(process.env.PORT || 5000);
