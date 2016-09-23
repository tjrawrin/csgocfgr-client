import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,

  selectedKey: '',

  selectedVal: '',

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    editKey(key) {
      this.set('selectedKey', key);
      this.set('selectedVal', this.get(`data.${key}`));
    }
  }
});
