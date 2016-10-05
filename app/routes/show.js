import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  beforeModel() {
    return this.store.unloadAll('cfg');
  },

  model(params) {
    return this.store.findRecord('cfg', params.permalink);
  },

  actions: {
    willTransition() {
      return this.store.unloadAll('cfg');
    },

    error(error) {
      Ember.get(this, 'flashMessages').danger(`${error.message}`);
      return this.transitionTo('index');
    }
  }
});
