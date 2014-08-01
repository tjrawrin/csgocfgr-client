import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    App.reset();
  }
});

test('Should welcome me to CS:GO Configr', function() {
  visit('/').then(function() {
    equal(find('h1.logo').text(), 'CS:GO  Configr');
  });
});
