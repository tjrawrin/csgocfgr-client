import Ember from 'ember';

export default Ember.Component.extend({
  // value for the canvas width
  canvasWidth: null,

  // value for the canvas height
  canvasHeight: null,

  // list of options for the crosshair style select input
  styleOptions: [
    {optionName: 'Default Apperance and Animation Behavior', id: 0},
    {optionName: 'Default Appearance With No Animation', id: 1},
    {optionName: 'Accurate Recoil/Spread Feedback With a Fixed Inner Part', id: 2},
    {optionName: 'Custom Appearance With Accurate Recoil/Spread Feedback', id: 3},
    {optionName: 'Custom Apperance With No Animation', id: 4},
    {optionName: 'Custom Apperance With Fake Recoil (Inaccurate Feedback)', id: 5}
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
