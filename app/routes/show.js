import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('cfg', params.cfg_id);
  },
  actions: {
    error: function(error) {
      if (error.status === 404) {
        this.flashMessage('The config file you requested does not exist or could not be found.', 'error');
        this.transitionTo('new');
      } else {
        this.flashMessage('Oh snaps! Something seriously went wrong. We\'re working on it!', 'error');
        this.transitionTo('new');
      }
    }
  }
});
