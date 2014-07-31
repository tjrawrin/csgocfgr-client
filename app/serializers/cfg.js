import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  normalize: function(type, hash, property) {
    hash.id = hash.slug;
    return this._super(type, hash, property);
  }
});
