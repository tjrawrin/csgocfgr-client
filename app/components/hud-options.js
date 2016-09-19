import Ember from 'ember';

export default Ember.Component.extend({
  hudcolorOptions: [
    {optionName: 'Default', id: 0},
    {optionName: 'White', id: 1},
    {optionName: 'Light Blue', id: 2},
    {optionName: 'Blue', id: 3},
    {optionName: 'Purple', id: 4},
    {optionName: 'Red', id: 5},
    {optionName: 'Orange', id: 6},
    {optionName: 'Yellow', id: 7},
    {optionName: 'Green', id: 8},
    {optionName: 'Teal', id: 9},
    {optionName: 'Pink', id: 10}
  ],

  viewmodelOptions: [
    {optionName: 'Desktop', id: 1},
    {optionName: 'Couch', id: 2},
    {optionName: 'Classic', id: 3}
  ],

  showFpsOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'FPS', id: 1},
    {optionName: 'Smooth', id: 2},
    {optionName: 'Server', id: 3},
    {optionName: 'Show & Log to File', id: 4},
    {optionName: 'Thread and Wait Times', id: 5}
  ],

  netGraphOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'Show Network Data', id: 1},
    {optionName: 'Show in/out Data', id: 2},
    {optionName: 'Draw Data on Payload', id: 3}
  ],

  isOpen: false,

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    updateValue(command, event) {
      this.set(`data.${command}`, event.target.value);
      console.log(this.get(`data.${command}`));
    }
  }
});
