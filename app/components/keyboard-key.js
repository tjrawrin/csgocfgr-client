import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  modelVal: '',

  style: Ember.computed(function() {
    return Ember.String.htmlSafe('display: inline;');
  }),

  isBound: Ember.computed(function() {
    const str = this.get('modelVal').trim();
    if (str.length === 0) {
      return false;
    } else {
      return true;
    }
  }),

  isBoundChange: Ember.observer('modelVal', function() {
    const str = this.get('modelVal').trim();
    if (str.length === 0) {
      return this.set('isBound', false);
    } else {
      return this.set('isBound', true);
    }
  }),

  actions: {
    editKey(val) {
      this.get('onEdit')();
    }
  }
});
