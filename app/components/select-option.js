import Ember from 'ember';

export default Ember.Component.extend({
  // sets the tag name for the component
  tagName: 'option',

  // binds the selected attribute
  attributeBindings: ['selected'],

  // updates the selected attribute when the option value changes
  selected: Ember.computed(function() {
    if (this.get('optionVal') === this.get('modelVal')) {
      return true;
    }
  }),

  // before the component is inserted into the dom, set the default select option value
  willInsertElement() {
    this.set('element.value', this.get('optionVal'));
  }
});
