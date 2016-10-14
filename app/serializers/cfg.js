import DS from 'ember-data';
import Ember from 'ember';

var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  // normalizes the local store id with the permalink from the server
  normalize(type, hash) {
    hash.id = hash.attributes.permalink;
    return this._super(type, hash);
  }
});
