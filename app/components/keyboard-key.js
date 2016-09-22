import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  classNameBindings: ['keyBound:Keyboard-key--bound'],

  modelVal: '',

  keyBound: Ember.computed(function() {
    const str = this.get('modelVal').trim();
    if (str.length === 0) {
      return false;
    } else {
      return true;
    }
  }),

  actions: {
    onClick() {

    }
  }
});
