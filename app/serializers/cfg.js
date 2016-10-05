import DS from 'ember-data';
import Ember from 'ember';

let underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },

  normalize(type, hash) {
    hash.id = hash.attributes.permalink;
    return this._super(type, hash);
  }
});
