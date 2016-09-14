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
    {optionName: '1: min(m_customaccel_max, pow(raw_mouse_delta, m_customaccel_exponent) * m_customaccel_scale + sensitivity)', id: 1},
    {optionName: '2: Same as 1, but x and y sensitivity are scaled by m_pitch and m_yaw respectively', id: 2},
    {optionName: '3: pow(raw_mouse_delta, m_customaccel_exponent - 1) * sensitivity', id: 3}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
