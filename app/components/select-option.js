import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'option',

  attributeBindings: ['selected'],

  selected: Ember.computed(function() {
    if (this.get('optionVal') === this.get('modelVal')) {
      return true;
    }
  }),

  willInsertElement() {
    this.set('element.value', this.get('optionVal'));
  }
});
