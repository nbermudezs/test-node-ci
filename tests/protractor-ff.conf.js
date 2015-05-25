var helper = require('./utils/firefoxHelper.js');

var config = {
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

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.seleniumAddress = 'http://localhost:4445/wd/hub';
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'App Tests'
  };
}

exports.config = config;