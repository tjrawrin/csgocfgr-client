import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    close: function() {
      return this.send('closeModal');
    },
    save: function() {
      var key = this.get('tempKey');
      var val = this.get('tempValue');
      this.set(key, val);
      return this.send('closeModal');
    }
  }
});
