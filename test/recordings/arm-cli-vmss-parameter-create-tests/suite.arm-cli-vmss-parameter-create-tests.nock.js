// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
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

exports.scopes = [];

 exports.randomTestIdsGenerated = function() { return ['xplatTstVmssGCreate1303','xplattestnic5469','xplatteststorage15676','xplatteststorage22897','xplatteststorage38835','xplatteststoragecnt15693','xplatteststoragecnt28197','xplatteststoragecnt37619','xplattestvnet8662','xplattestsubnet9928','xplattestipdns6586'];};