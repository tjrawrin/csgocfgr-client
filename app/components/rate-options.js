import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
