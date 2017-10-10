import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // normalizes the local store id with the permalink from the server
  normalize(type, hash) {
    hash.id = hash.attributes.permalink;
    return this._super(type, hash);
  }
});
