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
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule></Cors><DefaultServiceVersion>2013-08-15</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6f50597a-0001-0049-3aab-9ea567000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0a190699-0002-0021-64ab-9efb36000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e2a09b74-0003-0035-0fab-9e3852000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>503</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c40c4044-001a-0048-0fab-9ea49a000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:34 GMT' });
 return result; }]];