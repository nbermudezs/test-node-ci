var q = require('q');
var FirefoxProfile = require('firefox-profile');

exports.ffProfile = function() {
  var firefoxProfile = new FirefoxProfile();
  var deferred       = q.defer();


  firefoxProfile.setPreference('media.navigator.permission.disabled', true); // prevent Allow/Deny prompt
  firefoxProfile.setPreference('browser.dom.window.dump.enabled', true);

  firefoxProfile.encoded(function(encodedProfile) {
    var multiCapabilities = [{
      browserName: 'firefox',
      firefox_profile : encodedProfile,
      name: 'E2E On Firefox'
    }];
    deferred.resolve(multiCapabilities);
  });

  return deferred.promise;
};
