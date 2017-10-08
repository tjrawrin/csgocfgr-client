import Ember from 'ember';

export default Ember.Component.extend({
  // list of options for the filter enable select input
  filterEnableOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'Filters Completely', id: 1},
    {optionName: 'Displays Filtered Text Brighter', id: 2}
  ],

  // list of options for the notification select input
  notificationOptions: [
    {optionName: 'bottomright', id: 'bottomright'},
    {optionName: 'bottomleft', id: 'bottomleft'},
    {optionName: 'topright', id: 'topright'},
    {optionName: 'topleft', id: 'topleft'}
  ],

  // list of options for the download select input
  downloadOptions: [
    {optionName: 'all', id: 'all'},
    {optionName: 'nosounds', id: 'nosounds'},
    {optionName: 'none', id: 'none'}
  ],

  // list of options for the teammate color select input
  teammateColorsOptions: [
    {optionName: 'Show Teammates as Seperate Colors', id: 1},
    {optionName: 'Show Colors and Letters', id: 2}
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
