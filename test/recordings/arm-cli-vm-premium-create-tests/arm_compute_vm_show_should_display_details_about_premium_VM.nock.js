// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"21f42ca1-063b-4661-9ac7-84d78b0cef80\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL7125\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clic02284b615a57546-os-1461250709197\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13672.blob.core.windows.net/xplatteststoragecnt12373/clic02284b615a57546-os-1461250709197.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2716036876xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus2\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3518',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '895af9d7-954b-45c3-8bfc-dbfad65a03e9_131054026430276993',
  'x-ms-request-id': '9d687e19-d789-40e5-b3b5-d217373c1c88',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14862',
  'x-ms-correlation-request-id': 'c0302f26-e903-42ad-825b-1a500a3c7de2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150403Z:c0302f26-e903-42ad-825b-1a500a3c7de2',
  date: 'Thu, 21 Apr 2016 15:04:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"21f42ca1-063b-4661-9ac7-84d78b0cef80\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL7125\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clic02284b615a57546-os-1461250709197\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13672.blob.core.windows.net/xplatteststoragecnt12373/clic02284b615a57546-os-1461250709197.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2716036876xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus2\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3518',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '895af9d7-954b-45c3-8bfc-dbfad65a03e9_131054026430276993',
  'x-ms-request-id': '9d687e19-d789-40e5-b3b5-d217373c1c88',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14862',
  'x-ms-correlation-request-id': 'c0302f26-e903-42ad-825b-1a500a3c7de2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150403Z:c0302f26-e903-42ad-825b-1a500a3c7de2',
  date: 'Thu, 21 Apr 2016 15:04:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"21f42ca1-063b-4661-9ac7-84d78b0cef80\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL7125\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clic02284b615a57546-os-1461250709197\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13672.blob.core.windows.net/xplatteststoragecnt12373/clic02284b615a57546-os-1461250709197.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2716036876xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus2\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3518',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '895af9d7-954b-45c3-8bfc-dbfad65a03e9_131054026430276993',
  'x-ms-request-id': '38e8680f-3c64-403f-a807-57c7596dbc61',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14640',
  'x-ms-correlation-request-id': '5d7789ed-8264-4d4e-877e-a0a29adaf811',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150407Z:5d7789ed-8264-4d4e-877e-a0a29adaf811',
  date: 'Thu, 21 Apr 2016 15:04:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"21f42ca1-063b-4661-9ac7-84d78b0cef80\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/XPLATTESTZVMAVAIL7125\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clic02284b615a57546-os-1461250709197\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13672.blob.core.windows.net/xplatteststoragecnt12373/clic02284b615a57546-os-1461250709197.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://clisto2716036876xplatvm.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus2\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3518',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '895af9d7-954b-45c3-8bfc-dbfad65a03e9_131054026430276993',
  'x-ms-request-id': '38e8680f-3c64-403f-a807-57c7596dbc61',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14640',
  'x-ms-correlation-request-id': '5d7789ed-8264-4d4e-877e-a0a29adaf811',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150407Z:5d7789ed-8264-4d4e-877e-a0a29adaf811',
  date: 'Thu, 21 Apr 2016 15:04:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestnic\",\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic\",\r\n  \"etag\": \"W/\\\"302b8bde-d654-48f6-b0db-b70ad799ca43\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"09e36a3d-e245-43ad-8e55-165ea8a16077\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1461250766572\",\r\n        \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461250766572\",\r\n        \"etag\": \"W/\\\"302b8bde-d654-48f6-b0db-b70ad799ca43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/virtualNetworks/xplattestvnet/subnets/xplattestsubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"14k3002i22yehdkhjjc10zxpuc.cx.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-00-98-69\",\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1967',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"302b8bde-d654-48f6-b0db-b70ad799ca43"',
  'x-ms-request-id': 'ccc189a7-b832-4c39-9011-555ccbd1693a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14747',
  'x-ms-correlation-request-id': '4f00f690-eb06-4aff-8b4f-59b0803a814e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150409Z:4f00f690-eb06-4aff-8b4f-59b0803a814e',
  date: 'Thu, 21 Apr 2016 15:04:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestnic\",\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic\",\r\n  \"etag\": \"W/\\\"302b8bde-d654-48f6-b0db-b70ad799ca43\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"09e36a3d-e245-43ad-8e55-165ea8a16077\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1461250766572\",\r\n        \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461250766572\",\r\n        \"etag\": \"W/\\\"302b8bde-d654-48f6-b0db-b70ad799ca43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/virtualNetworks/xplattestvnet/subnets/xplattestsubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"14k3002i22yehdkhjjc10zxpuc.cx.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-00-98-69\",\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/virtualMachines/xplatvm\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1967',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"302b8bde-d654-48f6-b0db-b70ad799ca43"',
  'x-ms-request-id': 'ccc189a7-b832-4c39-9011-555ccbd1693a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14747',
  'x-ms-correlation-request-id': '4f00f690-eb06-4aff-8b4f-59b0803a814e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150409Z:4f00f690-eb06-4aff-8b4f-59b0803a814e',
  date: 'Thu, 21 Apr 2016 15:04:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/publicIPAddresses/xplattestip?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"f7097b6e-2596-4f4c-bc69-13727a85c272\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"df0989f0-56f6-4384-bea8-5dbf928739d3\",\r\n    \"ipAddress\": \"13.68.21.100\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestipdns2548\",\r\n      \"fqdn\": \"xplattestipdns2548.eastus2.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461250766572\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '973',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f7097b6e-2596-4f4c-bc69-13727a85c272"',
  'x-ms-request-id': '885cb4dc-0d97-4312-aea6-3ea3eaf4545c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14758',
  'x-ms-correlation-request-id': '58097b51-b954-4722-aaa4-88e29c68d065',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150411Z:58097b51-b954-4722-aaa4-88e29c68d065',
  date: 'Thu, 21 Apr 2016 15:04:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/publicIPAddresses/xplattestip?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"f7097b6e-2596-4f4c-bc69-13727a85c272\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"df0989f0-56f6-4384-bea8-5dbf928739d3\",\r\n    \"ipAddress\": \"13.68.21.100\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestipdns2548\",\r\n      \"fqdn\": \"xplattestipdns2548.eastus2.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1461250766572\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '973',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f7097b6e-2596-4f4c-bc69-13727a85c272"',
  'x-ms-request-id': '885cb4dc-0d97-4312-aea6-3ea3eaf4545c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14758',
  'x-ms-correlation-request-id': '58097b51-b954-4722-aaa4-88e29c68d065',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150411Z:58097b51-b954-4722-aaa4-88e29c68d065',
  date: 'Thu, 21 Apr 2016 15:04:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail7125?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": [\r\n      {\r\n        \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/XPLATTESTZVMCREATE3719/providers/Microsoft.Compute/virtualMachines/XPLATVM\"\r\n      }\r\n    ]\r\n  },\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail7125\",\r\n  \"name\": \"xplatTestZVMAvail7125\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus2\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '606',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '895af9d7-954b-45c3-8bfc-dbfad65a03e9_131054026430276993',
  'x-ms-request-id': '5aa028d6-cedb-493d-b845-88f7023218d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': 'b051d070-d0a9-46c1-9107-84229d94a114',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150414Z:b051d070-d0a9-46c1-9107-84229d94a114',
  date: 'Thu, 21 Apr 2016 15:04:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail7125?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": [\r\n      {\r\n        \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/XPLATTESTZVMCREATE3719/providers/Microsoft.Compute/virtualMachines/XPLATVM\"\r\n      }\r\n    ]\r\n  },\r\n  \"id\": \"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/xplatTestZVMCreate3719/providers/Microsoft.Compute/availabilitySets/xplatTestZVMAvail7125\",\r\n  \"name\": \"xplatTestZVMAvail7125\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus2\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '606',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '895af9d7-954b-45c3-8bfc-dbfad65a03e9_131054026430276993',
  'x-ms-request-id': '5aa028d6-cedb-493d-b845-88f7023218d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': 'b051d070-d0a9-46c1-9107-84229d94a114',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T150414Z:b051d070-d0a9-46c1-9107-84229d94a114',
  date: 'Thu, 21 Apr 2016 15:04:14 GMT',
  connection: 'close' });
 return result; }]];