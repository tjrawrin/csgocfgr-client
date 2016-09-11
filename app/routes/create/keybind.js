import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  model: function() {
    return this.modelFor('new');
  },
  actions: {
    openModal: function(key, value, model) {
      this.controllerFor('modal').set('model', model).setProperties({
        tempKey: key,
        tempValue: value
      });
      Ember.$('html').addClass('modal-open');
      return this.render('modal', {
        into: 'new.keybind',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      Ember.$('html').removeClass('modal-open');
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'new.keybind'
      });
    }
  }
});
