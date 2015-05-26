var http = require('http');
var server;

var config = {
  allScriptsTimeout: 10000,

  specs: ['e2e/*.js'],

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    isVerbose: true,
    showTiming: true,
    includeStackTrace: true
  },

  onPrepare: function() {
    console.log('Preparing everything...');

    browser.manage().window().setSize(1600, 1000);
    browser.ignoreSynchronization = true;
    require('./utils/waitReady.js');
    require('./utils/hasClass.js');

    server = http.createServer(require('./../server.js'));
    server.listen(0);
    browser.baseUrl = this.baseUrl = 'http://'+ server.address().address +':'+ server.address().port; 
  },

  onComplete: function() {
    server.close();
  }
};

module.exports = config;