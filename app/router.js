import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CsgocfgrENV.locationType
});

Router.map(function() {
  this.resource('configure', { path: '/' }, function() {
    this.resource('new', { path: '/n' }, function() {
      this.route('rate');
      this.route('audio');
      this.route('video');
      this.route('mouse');
      this.route('misc');
      this.route('hud');
      this.route('radar');
      this.route('keybind');
      this.route('crosshair');
    });
    this.resource('show', { path: ':cfg_id' }, function() {});
    this.resource('404', { path: '*path' });
  });
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    if (!window.ga) {
      return;
    } else {
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }
  }.on('didTransition')
});

export default Router;
