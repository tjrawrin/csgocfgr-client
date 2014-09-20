import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  /**
  * Serialize the slug returned from the server as the ID for
  * the ember model being shown
  */
  normalize: function(type, hash, property) {
    hash.id = hash.slug;
    return this._super(type, hash, property);
  }
});
