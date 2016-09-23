import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  style: Ember.computed(function() {
    return Ember.String.htmlSafe('display: inline;');
  }),

  modelVal: '',

  isBound: Ember.computed(function() {
    const str = this.get('modelVal').trim();
    if (str.length === 0) {
      return false;
    } else {
      return true;
    }
  }).property('modelVal'),

  actions: {
    editKey() {
      this.get('onEdit')();
    }
  }
});
