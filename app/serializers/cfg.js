import DS from 'ember-data';
import Ember from 'ember';

let underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },

  keyForRelationship(key) {
    return Ember.String.underscore(key);
  }
});
