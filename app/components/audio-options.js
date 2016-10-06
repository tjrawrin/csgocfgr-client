import Ember from 'ember';

export default Ember.Component.extend({
  // list of options for the speaker options select input
  speakerOptions: [
    {optionName: 'Default, Automatically Pick Best', id: -1},
    {optionName: 'Headphones', id: 1},
    {optionName: '4 Speakers', id: 3},
    {optionName: '2 Speakers', id: 4},
    {optionName: '5.1 Surround', id: 6},
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
