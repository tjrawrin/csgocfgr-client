import Ember from 'ember';

const defaultValues = {
  conFilterEnable: 0,
  conFilterText: '',
  conFilterTextOut: '',
  mmDedicatedSearchMaxping: 150,
  uiSteamOverlayNotificationPosition: 'topleft',
  clDownloadfilter: 'all',
  developer: false,
  conEnable: false,
  playerNevershowCommunityservermessage: false,
  gameinstructorEnable: true,
  optionDuckMethod: false,
  optionSpeedMethod: false,
  clForcepreload: false,
  clDisablehtmlmotd: false,
  clAutohelp: true,
  clShowhelp: true,
  clDisablefreezecam: false,
  clTeammateColorsShow: 1,
  clAutowepswitch: true,
  clUseOpensBuyMenu: true,
  closeonbuy: false,
};

export default Ember.Component.extend({
  data: defaultValues,
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
    {optionName: '1: Show Teammates as Seperate Colors in The Radar, Scoreboard, Etc...', id: 1},
    {optionName: '2: Show Colors and Letters', id: 2}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
