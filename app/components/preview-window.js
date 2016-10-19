import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doClosePreview() {
      this.get('closePreview')();
    }
  }
});
