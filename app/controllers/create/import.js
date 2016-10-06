import Ember from 'ember';

export default Ember.Controller.extend({
  // inject ember services for flash message plugin
  flashMessages: Ember.inject.service(),

  actions: {
    // redirects to the create page after importing settings from either text or a file
    redirectToCreate(data) {
      this.setImportedData(data).then(count => {
        Ember.get(this, 'flashMessages').success(`Imported ${count} setting(s) successfully!`, { timeout: 6000 });
        this.transitionToRoute('create.index');
      });
    }
  },

  // function for setting the imported data to the model
  setImportedData(data) {
    return new Promise(resolve => {
      const count = data.length;
      while (data.length > 0) {
        this.set(`model.${data[0].key}`, data[0].value);
        data.shift();
      }
      resolve(count);
    });
  }
});
