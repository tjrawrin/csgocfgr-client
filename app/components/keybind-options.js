import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    editValue() {
      console.log("test");
    }
  },

  keyBound(value) {
    const str = value.trim();
    if (str.length === 0) {
      return false;
    } else {
      return true;
    }
  }
});
