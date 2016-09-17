import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'option',

  value: null,

  selected: false,

  attributeBindings: ['selected'],

  willInsertElement() {
    this.set('element.value', this.get('value'));
    this.setDefaultSelected(this.get('value'), this.get('initialValue'));
  },

  setDefaultSelected(optionValue, initialValue) {
    if (optionValue === initialValue) {
      this.set('element.selected', true)
      console.log(this.get('element.selected'));
    } else {
      console.log(this.get('element.selected'));
    }
  }
});
