// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5893435f-6990-4bb3-bebb-b12f3535f990',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'EduardK - IaaS Tools',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description i:nil=\"true\"/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>4</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnett</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnett</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '415',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b7efefda65920b1889b2007dd573456c',
  date: 'Wed, 26 Aug 2015 10:17:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description i:nil=\"true\"/><DnsName i:nil=\"true\"/><GatewaySize>Small</GatewaySize><InstanceCount>4</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnett</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnett</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '415',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b7efefda65920b1889b2007dd573456c',
  date: 'Wed, 26 Aug 2015 10:17:16 GMT',
  connection: 'close' });
 return result; }]];