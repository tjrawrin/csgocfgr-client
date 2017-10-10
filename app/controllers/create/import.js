import Ember from 'ember';

export default Ember.Controller.extend({
  // inject ember services for flash message plugin
  toast: Ember.inject.service(),

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
    // redirects to the create page after importing settings from either text or a file
    redirectToCreate(data) {
      this.setImportedData(data).then(count => {
        Ember.get(this, 'toast').success(`Imported ${count} setting(s) successfully!`, '', { positionClass: 'toast-bottom-right' });
        this.transitionToRoute('create.index');
      });
    },

    // sends an action to toggle the preview window
    togglePreview() {
      this.send('doTogglePreview');
    }
  },

  // function for setting the imported data to the model
  setImportedData(data) {
    return new Promise(resolve => { // jshint ignore:line
      const count = data.length;
      while (data.length > 0) {
        this.set(`model.${data[0].key}`, data[0].value);
        data.shift();
      }
      resolve(count);
    });
  }
});
