import Ember from 'ember';

export default Ember.Controller.extend({
  // inject ember services for flash message plugin
  toast: Ember.inject.service(),

  actions: {
    // redirects to the create page after importing settings from either text or a file
    redirectToCreate(data) {
      this.setImportedData(data).then(count => {
        Ember.get(this, 'toast').success(`Imported ${count} setting(s) successfully!`, '', { positionClass: 'toast-bottom-right' });
        this.transitionToRoute('create.index');
      });
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
