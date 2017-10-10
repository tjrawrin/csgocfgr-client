import Ember from 'ember';

export default Ember.Component.extend({
  // binds the style attribute to the component
  attributeBindings: ['style'],

  // sets the style attribute on the keyboard input component
  style: Ember.computed(function() {
    return Ember.String.htmlSafe('width: 100%;');
  }),

  // the key in the model
  modelKey: '',

  // the model value
  modelVal: '',

  actions: {
    // updates the value in the model
    updateVal(key, event) {
      this.set(`data.${key}`, event.target.value);
    }
  }
});
