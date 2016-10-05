import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    permalink: {
      refreshModel: true,
      replace: true,
      as: 'e'
    }
  },

  model(params) {
    if (!params.permalink && !this.store.peekAll('cfg').content.length) {
      return this.store.createRecord('cfg');
    }

    return this.store.findRecord('cfg', params.permalink).then(cfg => {
      const attrs = cfg.toJSON();
      this.store.unloadRecord(cfg);
      let record = this.store.createRecord('cfg', attrs);
      record.set('permalink', null);
      return record;
    });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      const queryParams = controller.get('queryParams');
      for (let i = 0; i < queryParams.length; i++) {
        controller.set(`${queryParams[i]}`, null);
      }
    }
  },

  actions: {
    error(error) {
      Ember.get(this, 'flashMessages').danger('The requested file could not be found.', { timeout: 6000 });
      return this.transitionTo('index');
    }
  }
});
