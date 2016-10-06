import Ember from 'ember';

export default Ember.Component.extend({
  // list of options for the hud color select input
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

  // list of options for the view model select input
  viewmodelOptions: [
    {optionName: 'Desktop', id: 1},
    {optionName: 'Couch', id: 2},
    {optionName: 'Classic', id: 3}
  ],

  // list of options for the show fps select input
  showFpsOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'FPS', id: 1},
    {optionName: 'Smooth', id: 2},
    {optionName: 'Server', id: 3},
    {optionName: 'Show & Log to File', id: 4},
    {optionName: 'Thread and Wait Times', id: 5}
  ],

  // list of options for the net graph select input
  netGraphOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'Show Network Data', id: 1},
    {optionName: 'Show in/out Data', id: 2},
    {optionName: 'Draw Data on Payload', id: 3}
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
