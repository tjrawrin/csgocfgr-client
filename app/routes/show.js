import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('cfg', params.cfg_id);
  },

  actions: {
    error(error) {
      if (error.status === 404) {
        Ember.get(this, 'flashMessages').danger(`${error.message}`);
        this.transitionTo('index');
      } else {
        Ember.get(this, 'flashMessages').danger(`${error.message}`);
        this.transitionTo('index');
      }
    }
  }
});
