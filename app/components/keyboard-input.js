import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  style: Ember.computed(function() {
    return Ember.String.htmlSafe('width: 100%;');
  }),

  value: Ember.computed(function() {
    const key = this.get('key');
    return this.get(`data.${key}`);
  }),

  actions: {
    updateKeyVal() {
      const val = Ember.$('#edit-key-input').val();
      this.set(`data.${this.get('key')}`, val);
    }
  }
});
