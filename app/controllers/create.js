import Ember from 'ember';

export default Ember.Controller.extend({
  // query param for editing a saved config
  queryParams: ['permalink'],

  // starting value of the permalink query param
  permalink: null
});
