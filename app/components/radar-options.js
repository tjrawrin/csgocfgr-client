import Ember from 'ember';

const defaultValues = {
  clHudRadarScale: 1,
  clRadarScale: 0.7,
  clRadarIconScaleMin: 0.6,
  clRadarAlwaysCentered: true,
  clRadarRotate: true,
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
