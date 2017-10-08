import Ember from 'ember';

export default Ember.Component.extend({
  // determines if the component is open or closed
  isOpen: true,

  actions: {
    // toggles the opening and closing of the component
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
