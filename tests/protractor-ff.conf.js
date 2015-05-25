var helper = require('./utils/firefoxHelper.js');

var config = {
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

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
}

exports.config = config;