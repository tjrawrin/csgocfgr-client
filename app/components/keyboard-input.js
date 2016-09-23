import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  style: Ember.computed(function() {
    return Ember.String.htmlSafe('width: 100%;');
  }),

  modelKey: '',

  modelVal: '',

  actions: {
    updateVal(key, event) {
      this.set(`data.${key}`, event.target.value);
    }
  }
});
