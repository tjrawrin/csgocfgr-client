import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.store.unloadAll('cfg');
  },
  actions: {
    getStarted: function() {
      this.transitionTo('new.rate');
    },
    gitHub: function() {
      window.open('https://github.com/tjwarrin/csgocfgr-client', '_blank');
    }
  }
});
