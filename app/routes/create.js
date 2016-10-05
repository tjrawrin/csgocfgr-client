import Ember from 'ember';

export default Ember.Route.extend({
  // queryParams: {
  //   slug: {
  //     refreshModel: true,
  //     replace: true
  //   }
  // },

  model() {
    if (!this.store.peekAll('cfg').content.length) {
      return this.store.createRecord('cfg');
    }
    
    // return this.store.query('cfg', params).then(results => {
    //   if (results.content.length === 0) {
    //     this.simpleFlashMessage('The config file you requested does not exist or could not be found.', 'error');
    //     return this.store.createRecord('cfg', defaultValues);
    //   } else {
    //     const attrs = results.content[0].toJSON();
    //     this.controllerFor('create').set('slug', attrs.slug);
    //     return this.store.createRecord('cfg', attrs);
    //   }
    // });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      return this.controller.set('permalinkId', null);
    }
  }
});
