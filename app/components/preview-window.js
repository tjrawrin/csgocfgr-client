import Ember from 'ember';
import Spinner from 'npm:spin.js';

export default Ember.Component.extend({
  // config string value
  config: '',

  // checks if we are in the create route to determine which buttons to display
  inCreateRoute: Ember.computed(function() {
    const route = this.get('router.currentRouteName');
    if (route === 'create.index') {
      return true;
    } else {
      return false;
    }
  }),
});
