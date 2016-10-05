import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    redirectToCreate(data) {
      this.setImportedData(data).then(count => {
        Ember.get(this, 'flashMessages').success(`Imported ${count} setting(s) successfully!`, { timeout: 6000 });
        this.transitionToRoute('create.index');
      });
    }
  },

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
