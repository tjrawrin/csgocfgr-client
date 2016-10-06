import Ember from 'ember';

export default Ember.Route.extend({
  // unloads all records from the store
  beforeModel() {
    return this.store.unloadAll('cfg');
  }
});
