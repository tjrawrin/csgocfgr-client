import Ember from 'ember';

export default Ember.Route.extend({
  // inject ember services for flash message plugin
  flashMessages: Ember.inject.service(),

  // unloads all of the records from the store
  beforeModel() {
    return this.store.unloadAll('cfg');
  },

  // finds a record from the server
  model(params) {
    return this.store.findRecord('cfg', params.permalink);
  },

  actions: {
    // unloads all records from the store before transitioning to a new route
    willTransition() {
      return this.store.unloadAll('cfg');
    },

    // redirects to the index page when there is an error
    error(error) {
      Ember.get(this, 'flashMessages').danger('The requested file could not be found.', { timeout: 6000 });
      return this.transitionTo('index');
    },

    // redirects to the create page and passes the permalink query param
    redirectToCreate(permalink) {
      return this.transitionTo('create.index', { queryParams: { permalink: permalink }})
    }
  }
});
