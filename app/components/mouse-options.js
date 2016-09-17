import Ember from 'ember';

export default Ember.Component.extend({
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
    },

    updateValue(command, event) {
      this.set(`data.${command}`, event.target.value);
    }
  },

  setDefaultSelected(command, value) {
    console.log(command);
    console.log(value);
    const defaultValue = this.get(`data.${command}`);
    if (defaultValue === value) {
      return true;
    } else {
      return false;
    }
  }
});
