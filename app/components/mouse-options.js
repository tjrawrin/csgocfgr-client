import Ember from 'ember';

export default Ember.Component.extend({
  // list of options for the custom accel select input
  customAccelOptions: [
    {optionName: 'Custom Acceleration Disabled', id: 0},
    {optionName: 'Custom Acceleration Enabled', id: 1},
    {optionName: 'Custom Acceleration Enabled With Separate Yaw/Pitch Rescale', id: 2},
    {optionName: 'Custom Acceleration Enabled With Exponent Off By One', id: 3}
  ],

  // determines if the component is open or closed
  isOpen: false,

  actions: {
    // toggles the opening and closing of the component
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    // updates the store value for any select input within the component
    updateValue(command, event) {
      this.set(`data.${command}`, event.target.value);
    }
  }
});
