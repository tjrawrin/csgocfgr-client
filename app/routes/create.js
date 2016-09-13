import Ember from 'ember';

/**
* Object of default game values.
*/
const defaultValues = {
  rate: 80000,
  clCmdrate: 64,
  clUpdaterate: 64,
  clInterp: 0.03,
  clInterpRatio: 2,
  clLagcompensation: true,
  volume: 1,
  sndMusicvolume: 0.7,
  windowsSpeakerConfig: -1,
  sndMixahead: 0.1,
  sndHeadphonePanExponent: 2,
  sndHeadphonePanRadialWeight: 1,
  sndLegacySurround: false,
  sndMuteLosefocus: true,
  voiceScale: 1,
  voiceEnable: true,
  lobbyVoiceChatEnabled: true,
  matMonitorgamma: 2.2,
  matQueueMode: -1,
  fpsMax: 300,
  fpsMaxMenu: 120,
  rDynamic: true,
  rDrawtracersFirstperson: true,
  sensitivity: 6,
  zoomSensitivityRatioMouse: 1,
  mCustomaccel: 3,
  mRawinput: true,
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
  hudScaling: 0.85,
  clHudBackgroundAlpha: 0.5,
  clHudColor: 0,
  clLoadoutColorweaponnames: false,
  clHudHealthammoStyle: false,
  clHudPlayercountShowcount: false,
  clHudPlayercountPos: false,
  viewmodelFov: 54,
  viewmodelOffsetX: 0,
  viewmodelOffsetY: 0,
  viewmodelOffsetZ: 0,
  viewmodelPresetpos: 1,
  clViewmodelShiftLeftAmt: 1.5,
  clViewmodelShiftRightAmt: 0.75,
  clBobcycle: 0.98,
  clBobLowerAmt: 21,
  clBobamtLat: 0.4,
  clBobamtVert: 0.4,
  hudShowtargetid: true,
  clDrawOnlyDeathnotices: false,
  clRighthand: true,
  clShowloadout: true,
  clShowpos: false,
  clShowfps: 0,
  netGraph: 0,
  netGraphproportionalfont: true,
  clHudRadarScale: 1,
  clRadarScale: 0.7,
  clRadarIconScaleMin: 0.6,
  clRadarAlwaysCentered: true,
  clRadarRotate: true,
  keyEsc: 'cancelselect',
  keyF1: '',
  keyF2: '',
  keyF3: 'autobuy',
  keyF4: 'rebuy',
  keyF5: 'jpeg',
  keyF6: 'save quick',
  keyF7: 'save load',
  keyF8: '',
  keyF9: '',
  keyF10: 'quit prompt',
  keyF11: '',
  keyF12: '',
  keyK1: 'slot1;',
  keyK2: 'slot2;',
  keyK3: 'slot3;',
  keyK4: 'slot4;',
  keyK5: 'slot5;',
  keyK6: 'slot6;',
  keyK7: 'slot7;',
  keyK8: 'slot8;',
  keyK9: 'slot9;',
  keyK0: 'slot10;',
  keyHyphen: '',
  keyEquals: '',
  keyBackspace: '',
  keyTab: '+showscores;',
  keyQ: 'lastinv;',
  keyW: '+forward;',
  keyE: '+use;',
  keyR: '+reload;',
  keyT: '',
  keyY: 'messagemode;',
  keyU: 'messagemode2;',
  keyI: 'show_loadout_toggle;',
  keyO: '',
  keyP: '',
  keyLbracket: '',
  keyRbracket: '',
  keyBkslash: '',
  keyCapslock: '',
  keyA: '+moveleft;',
  keyS: '+back;',
  keyD: '+moveright;',
  keyF: '+lookatweapon;',
  keyG: 'drop;',
  keyH: '',
  keyJ: '',
  keyK: '',
  keyL: '',
  keySemicolon: '',
  keyApostrophe: '',
  keyEnter: '',
  keyShift: '+speed;',
  keyZ: 'radio1;',
  keyX: 'radio2;',
  keyC: 'radio3;',
  keyV: '',
  keyB: 'buymenu;',
  keyN: '',
  keyM: 'teammenu;',
  keyComma: '',
  keyPeriod: '',
  keyFwslash: '',
  keyCtrl: '+duck;',
  keyAlt: '',
  keySpace: '+jump;',
  keyPause: 'pause',
  keyIns: '',
  keyHome: '',
  keyPgup: '',
  keyDel: 'mute',
  keyEnd: '',
  keyPgdn: '',
  keyUparrow: '',
  keyLeftarrow: '',
  keyDownarrow: '',
  keyRightarrow: '',
  keyKpSlash: '',
  keyKpMultiply: '',
  keyKpMinus: '',
  keyKpHome: '',
  keyKpUparrow: '',
  keyKpPgup: '',
  keyKpPlus: '',
  keyKpLeftarrow: '',
  keyKp5: '',
  keyKpRightarrow: '',
  keyKpEnd: '',
  keyKpDownarrow: '',
  keyKpPgdn: '',
  keyKpEnter: '',
  keyKpIns: '',
  keyKpDel: '',
  keyMouse1: '+attack;',
  keyMwheelup: '',
  keyMouse3: '',
  keyMwheeldown: '',
  keyMouse2: '+attack2;',
  keyMouse4: '',
  keyMouse5: '',
  clCrosshairstyle: 0,
  clCrosshaircolorR: 50,
  clCrosshaircolorG: 250,
  clCrosshaircolorB: 50,
  clCrosshairalpha: 200,
  clCrosshairDrawoutline: true,
  clCrosshairOutlinethickness: 1,
  clCrosshairsize: 5,
  clCrosshairthickness: 0.5,
  clCrosshairgap: 1,
  clCrosshairdot: true
}

export default Ember.Route.extend({
  /**
  * Method to reset the slug query param to null upon exiting the new route.
  * Fixes an issue when visiting the new route when the slug isn't null and
  * being put back into the non-default config settings.
  */
  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('slug', null);
    }
  },

  /**
  * Query params settings, opts into a fill transition and updates the URL
  * with a replaceState.
  */
  queryParams: {
    slug: {
      refreshModel: true,
      replace: true
    }
  },

  /**
  * Sets the model for the new route, if no query params are passed to the URL
  * then the a new record with default settings are added to the store. If
  * query params are passed, then a record is loaded from the server.
  */
  model(params) {
    if (!params.slug) {
      return this.store.createRecord('cfg', defaultValues);
    }
    //
    // const self = this;
    // return this.store.findQuery('cfg', params).then(function(results) {
    //   if (results.content.length === 0) {
    //     self.simpleFlashMessage('The config file you requested does not exist or could not be found.', 'error');
    //     return self.store.createRecord('cfg', self.get('defaultValues'));
    //   } else {
    //     const attrs = results.content[0].toJSON();
    //     self.controllerFor('new').set('slug', attrs.slug);
    //     return self.store.createRecord('cfg', attrs);
    //   }
    // });
  },

  /**
  * Sets up the controller for new and the import compontent
  */
  // setupController(controller, model) {
  //   controller.set('model', model);
  //   this.controllerFor('create.import').set('model', model);
  // },

  /**
  * Renders the import component into the new view.
  */
  // renderTemplate() {
  //   this.render();
  //   this.render('create.import', {
  //     into: 'create',
  //     outlet: 'import'
  //   });
  // },

  actions: {
    /**
    * Action to download the file without saving it to the database.
    */
    downloadUnsavedFile: function() {
      var outputText = this.get('controller.renderConfig');
      var blob = new Blob([outputText], { type: 'text/plain' });
      saveAs(blob, 'autoexec.cfg');
    },
    /**
    * Action for resetting fields back to their default game values.
    */
    setToDefaultValue: function(command) {
      var defaultValue = this.get('defaultValues.' + command);

      return this.set('controller.model.' + command, defaultValue);
    },
    /**
    * Action for taking the values from an imported file and
    * setting the model values.
    */
    parseFileConfig: function(config) {
      var configArray = config;

      for (var i = 0; i < configArray.length; i++) {
        this.set('controller.model.' + configArray[i].key, configArray[i].value);
      }

      this.simpleFlashMessage('Settings successfully imported.', 'success');
    },
    /**
    * Action for taking the values from typed or pasted text and
    * setting the model values.
    */
    parseTextConfig: function(config) {
      var configArray = config;

      for (var i = 0; i < configArray.length; i++) {
        this.set('controller.model.' + configArray[i].key, configArray[i].value);
      }

      this.simpleFlashMessage('Settings successfully imported.', 'success');
    }
  }
});
