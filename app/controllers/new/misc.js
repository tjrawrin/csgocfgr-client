import Ember from 'ember';

export default Ember.ObjectController.extend({
  filterEnableOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'Filters Completely', id: 1},
    {optionName: 'Displays Filtered Text Brighter', id: 2}
  ],
  notificationOptions: [
    {optionName: 'Bottom Right', id: 'bottomright'},
    {optionName: 'Bottom Left', id: 'bottomleft'},
    {optionName: 'Top Right', id: 'topright'},
    {optionName: 'Top Left', id: 'topleft'}
  ],
  downloadOptions: [
    {optionName: 'All', id: 'all'},
    {optionName: 'No Sounds', id: 'nosounds'},
    {optionName: 'None', id: 'none'}
  ],
  teammateColorsOptions: [
    {optionName: 'Show Teammates as Seperate Colors in The Radar, Scoreboard, Etc...', id: 1},
    {optionName: 'Show Colors and Letters', id: 2}
  ]
});
