// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addEnvironment(new profile.Environment({
    name: 'dogfood',
    portalUrl: 'https://windows.azure-test.net/',
    publishingProfileUrl: 'https://windows.azure-test.net/publishsettings/index',
    managementEndpointUrl: 'https://management-preview.core.windows-int.net/',
    resourceManagerEndpointUrl: 'https://api-dogfood.resources.windows-int.net/',
    sqlManagementEndpointUrl: 'haha.haha.com',
    hostNameSuffix: 'undefined',
    sqlServerHostNameSuffix: 'haha',
    activeDirectoryEndpointUrl: 'https://login.windows-ppe.net',
    commonTenantName: 'undefined',
    storageEndpoint: 'undefined',
    galleryEndpointUrl: 'https://df.gallery.azure-test.net/'
  }));

  newProfile.addSubscription(new profile.Subscription({
    id: '06adb0b3-baaa-4e5f-9df6-ca770f7902cd',
    name: 'adminDogfood204',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '39cfad8b-7464-4273-a578-97f439ecf0ed',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['dogfood']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrg01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrg02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-1-80dc366f-ad8a-4e7b-b441-31a932df02e9.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/xplattestadlsrg02/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cliTestProfile02\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/profiles/cliTestProfile02\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"WestUs\",\"sku\":{\r\n        \"name\":\"Standard_Akamai\"\r\n      },\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '121eefff-9165-47fc-a99e-f4761544e1c2',
  'x-ms-client-request-id': '3b9433c1-76f3-4798-bba0-123e1536987b',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14824',
  'x-ms-correlation-request-id': '693c6bef-d7a9-42d7-a762-43812e5ba3ce',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T220846Z:693c6bef-d7a9-42d7-a762-43812e5ba3ce',
  date: 'Wed, 27 Apr 2016 22:08:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/xplattestadlsrg02/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cliTestProfile02\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/xplattestadlsrg02/providers/Microsoft.Cdn/profiles/cliTestProfile02\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"WestUs\",\"sku\":{\r\n        \"name\":\"Standard_Akamai\"\r\n      },\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '121eefff-9165-47fc-a99e-f4761544e1c2',
  'x-ms-client-request-id': '3b9433c1-76f3-4798-bba0-123e1536987b',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14824',
  'x-ms-correlation-request-id': '693c6bef-d7a9-42d7-a762-43812e5ba3ce',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T220846Z:693c6bef-d7a9-42d7-a762-43812e5ba3ce',
  date: 'Wed, 27 Apr 2016 22:08:46 GMT',
  connection: 'close' });
 return result; }]];