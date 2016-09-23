import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,

  editingKey: null,

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    editKey(key) {
      this.set('key', key);
    }
  }
});
