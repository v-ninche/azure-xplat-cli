// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRouteTbl' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '85c26e72-f577-49b4-9cf1-960960a709fe',
  'x-ms-correlation-request-id': '85c26e72-f577-49b4-9cf1-960960a709fe',
  'x-ms-routing-request-id': 'WESTUS:20150723T230711Z:85c26e72-f577-49b4-9cf1-960960a709fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:11 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRouteTbl' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '85c26e72-f577-49b4-9cf1-960960a709fe',
  'x-ms-correlation-request-id': '85c26e72-f577-49b4-9cf1-960960a709fe',
  'x-ms-routing-request-id': 'WESTUS:20150723T230711Z:85c26e72-f577-49b4-9cf1-960960a709fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:11 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl\",\"name\":\"xplatTestRouteTbl\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8a3e6540-3f22-42dd-a83b-b551496d7894',
  'x-ms-correlation-request-id': '8a3e6540-3f22-42dd-a83b-b551496d7894',
  'x-ms-routing-request-id': 'WESTUS:20150723T230712Z:8a3e6540-3f22-42dd-a83b-b551496d7894',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl\",\"name\":\"xplatTestRouteTbl\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8a3e6540-3f22-42dd-a83b-b551496d7894',
  'x-ms-correlation-request-id': '8a3e6540-3f22-42dd-a83b-b551496d7894',
  'x-ms-routing-request-id': 'WESTUS:20150723T230712Z:8a3e6540-3f22-42dd-a83b-b551496d7894',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRouteTbl' under resource group 'xplatTestRouteTbl' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ea148421-9ef4-43d8-b70c-cd65b4a6a634',
  'x-ms-correlation-request-id': 'ea148421-9ef4-43d8-b70c-cd65b4a6a634',
  'x-ms-routing-request-id': 'WESTUS:20150723T230713Z:ea148421-9ef4-43d8-b70c-cd65b4a6a634',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:12 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRouteTbl' under resource group 'xplatTestRouteTbl' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ea148421-9ef4-43d8-b70c-cd65b4a6a634',
  'x-ms-correlation-request-id': 'ea148421-9ef4-43d8-b70c-cd65b4a6a634',
  'x-ms-routing-request-id': 'WESTUS:20150723T230713Z:ea148421-9ef4-43d8-b70c-cd65b4a6a634',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:12 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"2ff89c4b-db51-44b0-9e7b-7e632adf1b0c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '322',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '626e4a08-1b91-4ac4-8d5f-2d6cddbbac74',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/626e4a08-1b91-4ac4-8d5f-2d6cddbbac74?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9a3a3df2-1f31-4bf7-a39b-72f70d0ea270',
  'x-ms-routing-request-id': 'WESTUS:20150723T230714Z:9a3a3df2-1f31-4bf7-a39b-72f70d0ea270',
  date: 'Thu, 23 Jul 2015 23:07:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"2ff89c4b-db51-44b0-9e7b-7e632adf1b0c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '322',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '626e4a08-1b91-4ac4-8d5f-2d6cddbbac74',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/626e4a08-1b91-4ac4-8d5f-2d6cddbbac74?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9a3a3df2-1f31-4bf7-a39b-72f70d0ea270',
  'x-ms-routing-request-id': 'WESTUS:20150723T230714Z:9a3a3df2-1f31-4bf7-a39b-72f70d0ea270',
  date: 'Thu, 23 Jul 2015 23:07:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/626e4a08-1b91-4ac4-8d5f-2d6cddbbac74?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '79845244-71b4-4369-a0e9-d8edc38908ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '117bfd57-d045-4133-af3d-b4c0c68a69cd',
  'x-ms-routing-request-id': 'WESTUS:20150723T230725Z:117bfd57-d045-4133-af3d-b4c0c68a69cd',
  date: 'Thu, 23 Jul 2015 23:07:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/626e4a08-1b91-4ac4-8d5f-2d6cddbbac74?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '79845244-71b4-4369-a0e9-d8edc38908ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '117bfd57-d045-4133-af3d-b4c0c68a69cd',
  'x-ms-routing-request-id': 'WESTUS:20150723T230725Z:117bfd57-d045-4133-af3d-b4c0c68a69cd',
  date: 'Thu, 23 Jul 2015 23:07:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"8a7940f9-31c2-4997-9192-13ad1dcd3c3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8a7940f9-31c2-4997-9192-13ad1dcd3c3e"',
  'x-ms-request-id': '19fc6d66-aa23-4372-bd4d-2ebd91f27f95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '85bcbf51-d259-472f-aa25-195329d3e8ba',
  'x-ms-routing-request-id': 'WESTUS:20150723T230725Z:85bcbf51-d259-472f-aa25-195329d3e8ba',
  date: 'Thu, 23 Jul 2015 23:07:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"8a7940f9-31c2-4997-9192-13ad1dcd3c3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8a7940f9-31c2-4997-9192-13ad1dcd3c3e"',
  'x-ms-request-id': '19fc6d66-aa23-4372-bd4d-2ebd91f27f95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '85bcbf51-d259-472f-aa25-195329d3e8ba',
  'x-ms-routing-request-id': 'WESTUS:20150723T230725Z:85bcbf51-d259-472f-aa25-195329d3e8ba',
  date: 'Thu, 23 Jul 2015 23:07:24 GMT',
  connection: 'close' });
 return result; }]];