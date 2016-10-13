import Ember from 'ember';

export default Ember.Component.extend({
  // list of options for the queue mode select input
  queueModeOptions: [
    {optionName: 'Default', id: -1},
    {optionName: 'Synchronus Single Thread', id: 0},
    {optionName: 'Queued Single Thread', id: 1},
    {optionName: 'Queued Multithreaded', id: 2},
  ],

  // determines if the component is open or closed
  isOpen: true,

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
