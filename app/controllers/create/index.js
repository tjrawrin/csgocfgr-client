import Ember from 'ember';

export default Ember.Controller.extend({
  // injects the create controller
  create: Ember.inject.controller(),

  // gets the value of the showPreview property from the create controller
  showPreview: Ember.computed(function() {
    return this.get('create.showPreview');
  }).property('create.showPreview'),

  // gets the valye of the config property from the create controller
  config: Ember.computed(function() {
    return this.get('create.config');
  }).property('create.config'),

  actions: {
    // sends an action to toggle the preview window
    togglePreview() {
      this.send('doTogglePreview');
    }
  }
});
