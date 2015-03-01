var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var cons = require('consolidate');

// CSS dependencies
var stylus = require('stylus');
var nib = require('nib');
var srcPath = path.join(__dirname, '../src');

// Internal dependencies
var app = express();
var env = app.get('env') || 'development';
var routes = require('./routes');


var logFormat = JSON.stringify({
  "method": ":method",
  "url": ":url",
  "status": ":status",
  "date": ":date[iso]",
  "duration": ":response-time ms",
  "content_length": ":res[content-length]"
});

// Logging requests
app.use(morgan(logFormat));

app.engine('html', cons.lodash);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

app.use(stylus.middleware({
  src: srcPath,
  dest: srcPath,
  compress: false,
  debug: true,
  linenos: true,
  force: true,
  sourcemap: true,
  compile: function (str, path) {
    return stylus(str).set('filename', path).use(nib())
  }
}));
app.use(express.static(srcPath));

routes.initialize(app, path, __dirname);

app.listen(8080, function () {
  console.log('App up and running');
});
