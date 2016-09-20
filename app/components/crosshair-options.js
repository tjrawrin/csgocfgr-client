import Ember from 'ember';

export default Ember.Component.extend({
  canvasWidth: null,

  canvasHeight: null,

  styleOptions: [
    {optionName: 'Default Apperance and Animation Behavior', id: 0},
    {optionName: 'Default Appearance With No Animation', id: 1},
    {optionName: 'Accurate Recoil/Spread Feedback With a Fixed Inner Part', id: 2},
    {optionName: 'Custom Appearance With Accurate Recoil/Spread Feedback', id: 3},
    {optionName: 'Custom Apperance With No Animation', id: 4},
    {optionName: 'Custom Apperance With Fake Recoil (Inaccurate Feedback)', id: 5}
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
