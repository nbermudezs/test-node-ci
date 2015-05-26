var q = require('q');
var FirefoxProfile = require('firefox-profile');

exports.ffProfile = function() {
  var firefoxProfile = new FirefoxProfile();
  var deferred       = q.defer();


  firefoxProfile.setPreference('media.navigator.permission.disabled', true); // prevent Allow/Deny prompt
  firefoxProfile.setPreference('browser.dom.window.dump.enabled', true);

  firefoxProfile.encoded(function(encodedProfile) {
    var capabilities = {
      browserName: 'firefox',
      firefox_profile : encodedProfile,
      name: 'E2E On Firefox'
    };
    if (process.env.TRAVIS_BUILD_NUMBER) {
      capabilities['seleniumAddress'] = 'http://ondemand.saucelabs.com:80/wd/hub';
      capabilities.username = process.env.SAUCE_USERNAME;
      capabilities.accessKey = process.env.SAUCE_ACCESS_KEY;
      capabilities['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
      capabilities.build = process.env.TRAVIS_BUILD_NUMBER;
      capabilities.name = 'E2E On Firefox';
    }
    deferred.resolve([capabilities]);
  });

  return deferred.promise;
};
