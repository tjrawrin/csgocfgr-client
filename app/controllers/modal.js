import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
    * Sends a close action to the route for closing the modal window.
    */
    close: function() {
      return this.send('closeModal');
    },
    /**
    * Sends a save action to the route for updating the model. Then
    * closes the modal window.
    */
    save: function() {
      var key = this.get('tempKey');
      var val = this.get('tempValue');
      this.set(key, val);
      return this.send('closeModal');
    }
  }
});
