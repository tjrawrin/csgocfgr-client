import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.store.unloadAll('cfg');
    this.transitionTo('create');
  }
});
