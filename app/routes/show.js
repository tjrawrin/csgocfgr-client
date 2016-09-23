import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findById('cfg', params.cfg_id);
  },

  actions: {
    error(error) {
      if (error.status === 404) {
        this.simpleFlashMessage('The config you requested does not exist or could not be found.', 'error');
        this.transitionTo('index');
      } else {
        this.simpleFlashMessage('Oh noes! Something seriously went wrong. We\'re working on it!', 'error');
        this.transitionTo('index');
      }
    }
  }
});
