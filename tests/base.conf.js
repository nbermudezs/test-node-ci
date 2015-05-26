var http = require('http');
var server;

module.exports = {
  allScriptsTimeout: 10000,

  specs: ['e2e/*.js'],

  baseUrl: 'http://localhost:3000',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    isVerbose: true,
    showTiming: true,
    includeStackTrace: true
  },

  onPrepare: function() {
    browser.manage().window().setSize(1600, 1000);
    browser.ignoreSynchronization = true;
    require('./utils/waitReady.js');
    require('./utils/hasClass.js');

    server = http.createServer(require('./../server.js'));
    server.listen(0);
    browser.baseUrl = 'http://'+ server.address().address +':'+ server.address().port; 
  },

  onComplete: function() {
    server.close();
  }
};