import Ember from 'ember';

export default Ember.Component.extend({
  queueModeOptions: [
    {optionName: '-1: Default', id: -1},
    {optionName: '0: Synchronus Single Thread', id: 0},
    {optionName: '1: Queued Single Thread', id: 1},
    {optionName: '2: Queued Multithreaded', id: 2},
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
    const defaultValue = this.get(`data.${command}`);
    if (defaultValue === value) {
      return true;
    } else {
      return false;
    }
  }
});
