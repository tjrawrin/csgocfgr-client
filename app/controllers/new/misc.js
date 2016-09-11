import Ember from 'ember';

export default Ember.Controller.extend({
  /**
  * Array of objects for the filter enabled options custom select compontent.
  */
  filterEnableOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'Filters Completely', id: 1},
    {optionName: 'Displays Filtered Text Brighter', id: 2}
  ],
  /**
  * Array of objects for the notification options custom select compontent.
  */
  notificationOptions: [
    {optionName: 'Bottom Right', id: 'bottomright'},
    {optionName: 'Bottom Left', id: 'bottomleft'},
    {optionName: 'Top Right', id: 'topright'},
    {optionName: 'Top Left', id: 'topleft'}
  ],
  /**
  * Array of objects for the download options custom select compontent.
  */
  downloadOptions: [
    {optionName: 'All', id: 'all'},
    {optionName: 'No Sounds', id: 'nosounds'},
    {optionName: 'None', id: 'none'}
  ],
  /**
  * Array of objects for the teammate color options custom select compontent.
  */
  teammateColorsOptions: [
    {optionName: 'Show Teammates as Seperate Colors in The Radar, Scoreboard, Etc...', id: 1},
    {optionName: 'Show Colors and Letters', id: 2}
  ]
});
