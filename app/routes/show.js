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
      Ember.get(this, 'flashMessages').danger('The requested file could not be found.', { timeout: 6000 });
      return this.transitionTo('index');
    },

    redirectToCreate(permalink) {
      return this.transitionTo('create.index', { queryParams: { permalink: permalink }})
    }
  }
});
