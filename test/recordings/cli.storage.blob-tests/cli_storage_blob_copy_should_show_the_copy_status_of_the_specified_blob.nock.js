// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/testblobcopydest/toCopy')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 01 Jul 2015 06:34:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D281DF2C8DF8A7"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '05047b51-0001-0011-47c8-b3a11c000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  'x-ms-copy-id': 'db0e6934-19dd-4667-99e7-db14db6c6e41',
  'x-ms-copy-source': 'https://xplat.blob.core.windows.net/testblobcopysource/toCopy?se=2015-07-08T06%3A34%3A52Z&sp=r&sv=2015-02-21&sr=b&sig=H%2BljzkqaP8%2B8%2F0hLWGjrLXfk%2F7OhLtuUhH3Qg%2FPrt%2BU%3D',
  'x-ms-copy-status': 'success',
  'x-ms-copy-progress': '10/10',
  'x-ms-copy-completion-time': 'Wed, 01 Jul 2015 06:34:54 GMT',
  date: 'Wed, 01 Jul 2015 06:34:53 GMT' });
 return result; }]];