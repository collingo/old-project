'use strict';

var browserify = require('browserify');
var glob = require('glob');
var helpers = require('./helpers');

var redis = require('redis');
var redisClient = redis.createClient();

module.exports.initialize = function (app, path, basepath) {
  app.get('/components/:component.js', function (req, res, next) {
    var filename = path.join(basepath, '../src/components', req.params.component, 'view.jsx');
    var sandbox = path.join(basepath, '../src/components', req.params.component, 'sandbox.jsx');
    var b = browserify();

    res.setHeader('content-type', 'text/javascript');

    b.require('react', {expose: 'react'});
    b.require(filename, {expose: 'view'});
    b.require(sandbox, {expose: 'sandbox'});
    b.bundle()
      .on('error', function (error) {
        var errorMessage = [error.name, ': "', error.description, '" in ', error.filename, ' at line number ', error.lineNumber].join('');
        console.error(errorMessage);
        // due to Chrome not displaying response data in non 200 states need to expose the error message via a console.error
        res.send('console.error(\'' + errorMessage + '\');');
      })
      .pipe(res);
  });

  app.get('/components/:component', function (req, res) {
    var name = req.params.component;
    var symbol = name.toLowerCase();
    var uri = helpers.toPath('/components', symbol + '.js');

    res.render('component', {
      component_uri: uri,
      component_name: name
    });
  });

  app.get('/components', function (req, res) {
    helpers.getAllComponentNames(function (componentNames) {
      res.render('components', {
        components: componentNames.map(function (componentName) {
          return componentName;
        })
      });
    });
  });

  app.get('*', function (req, res) {
    redisClient.select(3, function () {
      redisClient.hmget(['urls', 'collingo'], function (err, urls) {
        console.log(urls[0]);
        res.render('index', {
          urls: urls[0]
        });
      });
    });
  });
};
