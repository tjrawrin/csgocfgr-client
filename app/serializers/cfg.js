import DS from 'ember-data';
import Ember from 'ember';

let underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  // underscores key names
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },

  // normalizes the local store id with the permalink from the server
  normalize(type, hash) {
    hash.id = hash.attributes.permalink;
    return this._super(type, hash);
  }
});
