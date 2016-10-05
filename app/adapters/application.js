import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  namespace: 'api/v1',

  // allows the multiword paths in urls to be underscored
  pathForType(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  },

  shouldReloadAll() {
    return true;
  },

  shouldBackgroundReloadRecord() {
    return true;
  }
});
