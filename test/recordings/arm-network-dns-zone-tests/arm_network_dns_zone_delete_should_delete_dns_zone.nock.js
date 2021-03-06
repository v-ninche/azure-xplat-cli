// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationResults/delzone635937148710423221794443de?api-version=2015-05-04-preview',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone635937148710423221794443de?api-version=2015-05-04-preview',
  'x-ms-request-id': '25a85047-c7d2-411c-a5c8-67eb57939e4b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b1aa3dd1-235a-472c-b4f1-8b164a337611',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T084756Z:b1aa3dd1-235a-472c-b4f1-8b164a337611',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 08:47:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationResults/delzone635937148710423221794443de?api-version=2015-05-04-preview',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone635937148710423221794443de?api-version=2015-05-04-preview',
  'x-ms-request-id': '25a85047-c7d2-411c-a5c8-67eb57939e4b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b1aa3dd1-235a-472c-b4f1-8b164a337611',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T084756Z:b1aa3dd1-235a-472c-b4f1-8b164a337611',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 08:47:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com' under resource group 'xplat-test-dns-zone' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f791dd4c-3587-4f3a-92a7-e84f1fb3cef7',
  'x-ms-correlation-request-id': 'f791dd4c-3587-4f3a-92a7-e84f1fb3cef7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T084759Z:f791dd4c-3587-4f3a-92a7-e84f1fb3cef7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 08:47:59 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com' under resource group 'xplat-test-dns-zone' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f791dd4c-3587-4f3a-92a7-e84f1fb3cef7',
  'x-ms-correlation-request-id': 'f791dd4c-3587-4f3a-92a7-e84f1fb3cef7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T084759Z:f791dd4c-3587-4f3a-92a7-e84f1fb3cef7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 08:47:59 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; }]];