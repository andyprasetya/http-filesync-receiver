var environments = {};
environments.staging = {
  'httpPort' : 3030,
  'httpsPort' : 3031,
  'envName' : 'staging',
  'fileUploadTempDir' : '/home/fedora/Nodewerx/http-filesync-receiver/data/tmp',
  'fileUploadDir' : '/home/fedora/Nodewerx/http-filesync-receiver/uploaded-files/'
};
environments.production = {
  'httpPort' : 5030,
  'httpsPort' : 5031,
  'envName' : 'production',
  'fileUploadTempDir' : '/home/fedora/Nodewerx/http-filesync-receiver/data/tmp',
  'fileUploadDir' : '/home/fedora/Nodewerx/http-filesync-receiver/uploaded-files/'
};
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
module.exports = environmentToExport;