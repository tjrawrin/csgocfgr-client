import Ember from 'ember';

const defaultValues = {
  rate: 80000,
  clCmdrate: 64,
  clUpdaterate: 64,
  clInterp: 0.03,
  clInterpRatio: 2,
  clLagcompensation: true,
};

export default Ember.Component.extend({
  data: defaultValues,
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
