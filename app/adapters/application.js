import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  // sets the adapter host name
  host: 'http://localhost:3000',

  // sets the namespace for our server api
  namespace: 'api/v1',

  // allows the multiword paths in urls to be underscored
  pathForType(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
