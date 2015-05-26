var helper = require('./utils/firefoxHelper.js');
var config = require('./base.conf');

config.getMultiCapabilities = helper.ffProfile;

exports.config = config;