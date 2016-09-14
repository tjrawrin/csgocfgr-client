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
    {optionName: '0: Custom Acceleration Disabled', id: 0},
    {optionName: '1: Custom Acceleration Enabled', id: 1},
    {optionName: '2: Custom Acceleration Enabled With Separate Yaw/Pitch Rescale', id: 2},
    {optionName: '3: Custom Acceleration Enabled With Exponent Off By One', id: 3}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
