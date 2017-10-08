import Ember from 'ember';

export default Ember.Route.extend({
  // sets the model for this route based on the create route
  model() {
    return this.modelFor('create');
  }
});
