import Ember from 'ember';

export default Ember.Component.extend({
  customAccelOptions: [
    {optionName: 'Custom Acceleration Disabled', id: 0},
    {optionName: 'Custom Acceleration Enabled', id: 1},
    {optionName: 'Custom Acceleration Enabled With Separate Yaw/Pitch Rescale', id: 2},
    {optionName: 'Custom Acceleration Enabled With Exponent Off By One', id: 3}
  ],

  isOpen: false,

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    updateValue(command, event) {
      this.set(`data.${command}`, event.target.value);
    }
  }
});
