import Ember from 'ember';

export default Ember.Component.extend({
  // binds the style attribute to the component
  attributeBindings: ['style'],

  // sets the style attribute on the keyboard input component
  style: Ember.computed(function() {
    return Ember.String.htmlSafe('display: inline;');
  }),

  // the model value
  modelVal: '',

  // determines if a key is bound and trims trailing white space
  isBound: Ember.computed(function() {
    const str = this.get('modelVal').trim();
    if (str.length === 0) {
      return false;
    } else {
      return true;
    }
  }).property('modelVal'),

  actions: {
    // calls and executes an onEdit action
    editKey() {
      this.get('onEdit')();
    }
  }
});
