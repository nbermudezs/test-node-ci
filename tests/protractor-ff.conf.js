var helper = require('./utils/firefoxHelper.js');

exports.config = {
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

  seleniumPort: 4444,

  allScriptsTimeout: 10000,

  specs: ['e2e/*.js'],

  baseUrl: 'http://localhost:3000',

  getMultiCapabilities: helper.ffProfile,

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    require('./utils/waitReady.js');
    require('./utils/hasClass.js');
  }
};
