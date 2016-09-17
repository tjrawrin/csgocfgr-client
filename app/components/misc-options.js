import Ember from 'ember';

export default Ember.Component.extend({
  filterEnableOptions: [
    {optionName: '0: Disabled', id: 0},
    {optionName: '1: Filters Completely', id: 1},
    {optionName: '2: Displays Filtered Text Brighter', id: 2}
  ],

  notificationOptions: [
    {optionName: 'bottomright', id: 'bottomright'},
    {optionName: 'bottomleft', id: 'bottomleft'},
    {optionName: 'topright', id: 'topright'},
    {optionName: 'topleft', id: 'topleft'}
  ],

  downloadOptions: [
    {optionName: 'all', id: 'all'},
    {optionName: 'nosounds', id: 'nosounds'},
    {optionName: 'none', id: 'none'}
  ],

  teammateColorsOptions: [
    {optionName: '1: Show Teammates as Seperate Colors', id: 1},
    {optionName: '2: Show Colors and Letters', id: 2}
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
  },

  setDefaultSelected(command, list) {
    const defaultValue = this.get(`data.${command}`);
    list.map(option => {
      if (option.id === defaultValue) {
        return true;
      } else {
        return false;
      }
    });
  }

});
