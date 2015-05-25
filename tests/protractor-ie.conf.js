var config = {
	allScriptsTimeout: 10000,

  specs: ['e2e/*.js'],

  capabilities: {
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
  },

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
  }
};

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'internet explorer',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'platform': 'ANY',
    'version': '11',
    'name': 'E2E On IE'
	};
}

exports.config = config;