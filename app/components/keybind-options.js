import Ember from 'ember';

export default Ember.Component.extend({
  // determines if the component is open or closed
  isOpen: false,

  // value for the selected key
  selectedKey: '',

  // value for the selected key's value
  selectedVal: '',

  actions: {
    // toggles the opening and closing of the component
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    // action for editing the key's value and saving it in the store
    editKey(key) {
      this.set('selectedKey', key);
      this.set('selectedVal', this.get(`data.${key}`));
    }
  }
});
