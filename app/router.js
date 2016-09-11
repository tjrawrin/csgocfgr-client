import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('configure', { resetNamespace: true, path: '/' }, function() {
    this.route('new', { resetNamespace: true, path: '/n' }, function() {
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
    this.route('show', { resetNamespace: true, path: ':cfg_id' }, function() {});
    this.route('404', { resetNamespace: true, path: '*path' });
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
