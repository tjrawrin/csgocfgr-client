import Ember from 'ember';

const defaultValues = {
  sensitivity: 6,
  zoomSensitivityRatioMouse: 1,
  mCustomaccel: 3,
  mRawinput: true,
};

export default Ember.Component.extend({
  data: defaultValues,
  customAccelOptions: [
    {optionName: 'Custom Acceleration Disabled', id: 0},
    {optionName: '1', id: 1},
    {optionName: '2', id: 2},
    {optionName: '3', id: 3}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
