import Ember from 'ember';

export default Ember.Component.extend({
  queueModeOptions: [
    {optionName: 'Default', id: -1},
    {optionName: 'Synchronus Single Thread', id: 0},
    {optionName: 'Queued Single Thread', id: 1},
    {optionName: 'Queued Multithreaded', id: 2},
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
