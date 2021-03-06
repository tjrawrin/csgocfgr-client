import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  permalink: attr('string', { defaultValue: null }),
  //rate
  rate: attr('number', { defaultValue: 80000 }),
  clCmdrate: attr('number', { defaultValue: 64 }),
  clUpdaterate: attr('number', { defaultValue: 64 }),
  clInterp: attr('number', { defaultValue: 0.03 }),
  clInterpRatio: attr('number', { defaultValue: 2 }),
  clLagcompensation: attr('boolean', { defaultValue: true }),
  //audio
  volume: attr('number', { defaultValue: 1 }),
  sndMusicvolume: attr('number', { defaultValue: 0.7 }),
  windowsSpeakerConfig: attr('number', { defaultValue: -1 }),
  sndMixahead: attr('number', { defaultValue: 0.1 }),
  sndHeadphonePanExponent: attr('number', { defaultValue: 2 }),
  sndHeadphonePanRadialWeight: attr('number', { defaultValue: 1 }),
  sndLegacySurround: attr('boolean', { defaultValue: false }),
  sndMuteLosefocus: attr('boolean', { defaultValue: true }),
  voiceScale: attr('number', { defaultValue: 1 }),
  voiceEnable: attr('boolean', { defaultValue: true }),
  lobbyVoiceChatEnabled: attr('boolean', { defaultValue: true }),
  //video
  matMonitorgamma: attr('number', { defaultValue: 2.2 }),
  matQueueMode: attr('number', { defaultValue: -1 }),
  fpsMax: attr('number', { defaultValue: 300 }),
  fpsMaxMenu: attr('number', { defaultValue: 120 }),
  rDynamic: attr('boolean', { defaultValue: true }),
  rDrawtracersFirstperson: attr('boolean', { defaultValue: true }),
  //mouse
  sensitivity: attr('number', { defaultValue: 6 }),
  zoomSensitivityRatioMouse: attr('number', { defaultValue: 1 }),
  mCustomaccel: attr('number', { defaultValue: 3 }),
  mRawinput: attr('boolean', { defaultValue: true }),
  //misc
  conFilterEnable: attr('number', { defaultValue: 0 }),
  conFilterText: attr('string', { defaultValue: '' }),
  conFilterTextOut: attr('string', { defaultValue: '' }),
  mmDedicatedSearchMaxping: attr('number', { defaultValue: 150 }),
  uiSteamOverlayNotificationPosition: attr('string', { defaultValue: 'topleft' }),
  clDownloadfilter: attr('string', { defaultValue: 'all' }),
  developer: attr('boolean', { defaultValue: false }),
  conEnable: attr('boolean', { defaultValue: false }),
  playerNevershowCommunityservermessage: attr('boolean', { defaultValue: false }),
  gameinstructorEnable: attr('boolean', { defaultValue: true }),
  optionDuckMethod: attr('boolean', { defaultValue: false }),
  optionSpeedMethod: attr('boolean', { defaultValue: false }),
  clForcepreload: attr('boolean', { defaultValue: false }),
  clDisablehtmlmotd: attr('boolean', { defaultValue: false }),
  clAutohelp: attr('boolean', { defaultValue: true }),
  clShowhelp: attr('boolean', { defaultValue: true }),
  clDisablefreezecam: attr('boolean', { defaultValue: false }),
  clTeammateColorsShow: attr('number', { defaultValue: 1 }),
  clAutowepswitch: attr('boolean', { defaultValue: true }),
  clUseOpensBuyMenu: attr('boolean', { defaultValue: true }),
  closeonbuy: attr('boolean', { defaultValue: false }),
  //hud
  hudScaling: attr('number', { defaultValue: 0.85 }),
  clHudBackgroundAlpha: attr('number', { defaultValue: 0.5 }),
  clHudColor: attr('number', { defaultValue: 0 }),
  clLoadoutColorweaponnames: attr('boolean', { defaultValue: false }),
  clHudHealthammoStyle: attr('boolean', { defaultValue: false }),
  clHudPlayercountShowcount: attr('boolean', { defaultValue: false }),
  clHudPlayercountPos: attr('boolean', { defaultValue: false }),
  viewmodelFov: attr('number', { defaultValue: 54 }),
  viewmodelOffsetX: attr('number', { defaultValue: 0 }),
  viewmodelOffsetY: attr('number', { defaultValue: 0 }),
  viewmodelOffsetZ: attr('number', { defaultValue: 0 }),
  viewmodelPresetpos: attr('number', { defaultValue: 1 }),
  clViewmodelShiftLeftAmt: attr('number', { defaultValue: 1.5 }),
  clViewmodelShiftRightAmt: attr('number', { defaultValue: 0.75 }),
  clBobcycle: attr('number', { defaultValue: 0.98 }),
  clBobLowerAmt: attr('number', { defaultValue: 21 }),
  clBobamtLat: attr('number', { defaultValue: 0.4 }),
  clBobamtVert: attr('number', { defaultValue: 0.4 }),
  hudShowtargetid: attr('boolean', { defaultValue: true }),
  clDrawOnlyDeathnotices: attr('boolean', { defaultValue: false }),
  clRighthand: attr('boolean', { defaultValue: true }),
  clShowloadout: attr('boolean', { defaultValue: true }),
  clShowpos: attr('boolean', { defaultValue: false }),
  clShowfps: attr('number', { defaultValue: 0 }),
  netGraph: attr('number', { defaultValue: 0 }),
  netGraphproportionalfont: attr('boolean', { defaultValue: true }),
  //radar
  clHudRadarScale: attr('number', { defaultValue: 1 }),
  clRadarScale: attr('number', { defaultValue: 0.7 }),
  clRadarIconScaleMin: attr('number', { defaultValue: 0.6 }),
  clRadarAlwaysCentered: attr('boolean', { defaultValue: true }),
  clRadarRotate: attr('boolean', { defaultValue: true }),
  //keybind
  keyEsc: attr('string', { defaultValue: 'cancelselect' }),
  keyF1: attr('string', { defaultValue: '' }),
  keyF2: attr('string', { defaultValue: '' }),
  keyF3: attr('string', { defaultValue: 'autobuy' }),
  keyF4: attr('string', { defaultValue: 'rebuy' }),
  keyF5: attr('string', { defaultValue: 'jpeg' }),
  keyF6: attr('string', { defaultValue: 'save quick' }),
  keyF7: attr('string', { defaultValue: 'save load' }),
  keyF8: attr('string', { defaultValue: '' }),
  keyF9: attr('string', { defaultValue: '' }),
  keyF10: attr('string', { defaultValue: 'quit prompt' }),
  keyF11: attr('string', { defaultValue: '' }),
  keyF12: attr('string', { defaultValue: '' }),
  keyK1: attr('string', { defaultValue: 'slot1' }),
  keyK2: attr('string', { defaultValue: 'slot2' }),
  keyK3: attr('string', { defaultValue: 'slot3' }),
  keyK4: attr('string', { defaultValue: 'slot4' }),
  keyK5: attr('string', { defaultValue: 'slot5' }),
  keyK6: attr('string', { defaultValue: 'slot6' }),
  keyK7: attr('string', { defaultValue: 'slot7' }),
  keyK8: attr('string', { defaultValue: 'slot8' }),
  keyK9: attr('string', { defaultValue: 'slot9' }),
  keyK0: attr('string', { defaultValue: 'slot10' }),
  keyHyphen: attr('string', { defaultValue: '' }),
  keyEquals: attr('string', { defaultValue: '' }),
  keyBackspace: attr('string', { defaultValue: '' }),
  keyTab: attr('string', { defaultValue: '+showscores' }),
  keyQ: attr('string', { defaultValue: 'lastinv' }),
  keyW: attr('string', { defaultValue: '+forward' }),
  keyE: attr('string', { defaultValue: '+use' }),
  keyR: attr('string', { defaultValue: '+reload' }),
  keyT: attr('string', { defaultValue: '' }),
  keyY: attr('string', { defaultValue: 'messagemode' }),
  keyU: attr('string', { defaultValue: 'messagemode2' }),
  keyI: attr('string', { defaultValue: 'show_loadout_toggle' }),
  keyO: attr('string', { defaultValue: '' }),
  keyP: attr('string', { defaultValue: '' }),
  keyLbracket: attr('string', { defaultValue: '' }),
  keyRbracket: attr('string', { defaultValue: '' }),
  keyBkslash: attr('string', { defaultValue: '' }),
  keyCapslock: attr('string', { defaultValue: '' }),
  keyA: attr('string', { defaultValue: '+moveleft' }),
  keyS: attr('string', { defaultValue: '+back' }),
  keyD: attr('string', { defaultValue: '+moveright' }),
  keyF: attr('string', { defaultValue: '+lookatweapon' }),
  keyG: attr('string', { defaultValue: 'drop' }),
  keyH: attr('string', { defaultValue: '' }),
  keyJ: attr('string', { defaultValue: '' }),
  keyK: attr('string', { defaultValue: '' }),
  keyL: attr('string', { defaultValue: '' }),
  keySemicolon: attr('string', { defaultValue: '' }),
  keyApostrophe: attr('string', { defaultValue: '' }),
  keyEnter: attr('string', { defaultValue: '' }),
  keyShift: attr('string', { defaultValue: '+speed' }),
  keyZ: attr('string', { defaultValue: 'radio1' }),
  keyX: attr('string', { defaultValue: 'radio2' }),
  keyC: attr('string', { defaultValue: 'radio3' }),
  keyV: attr('string', { defaultValue: '' }),
  keyB: attr('string', { defaultValue: 'buymenu' }),
  keyN: attr('string', { defaultValue: '' }),
  keyM: attr('string', { defaultValue: 'teammenu' }),
  keyComma: attr('string', { defaultValue: '' }),
  keyPeriod: attr('string', { defaultValue: '' }),
  keyFwslash: attr('string', { defaultValue: '' }),
  keyCtrl: attr('string', { defaultValue: '+duck' }),
  keyAlt: attr('string', { defaultValue: '' }),
  keySpace: attr('string', { defaultValue: '+jump' }),
  keyPause: attr('string', { defaultValue: 'pause' }),
  keyIns: attr('string', { defaultValue: '' }),
  keyHome: attr('string', { defaultValue: '' }),
  keyPgup: attr('string', { defaultValue: '' }),
  keyDel: attr('string', { defaultValue: 'mute' }),
  keyEnd: attr('string', { defaultValue: '' }),
  keyPgdn: attr('string', { defaultValue: '' }),
  keyUparrow: attr('string', { defaultValue: '' }),
  keyLeftarrow: attr('string', { defaultValue: '' }),
  keyDownarrow: attr('string', { defaultValue: '' }),
  keyRightarrow: attr('string', { defaultValue: '' }),
  keyKpSlash: attr('string', { defaultValue: '' }),
  keyKpMultiply: attr('string', { defaultValue: '' }),
  keyKpMinus: attr('string', { defaultValue: '' }),
  keyKpHome: attr('string', { defaultValue: '' }),
  keyKpUparrow: attr('string', { defaultValue: '' }),
  keyKpPgup: attr('string', { defaultValue: '' }),
  keyKpPlus: attr('string', { defaultValue: '' }),
  keyKpLeftarrow: attr('string', { defaultValue: '' }),
  keyKp5: attr('string', { defaultValue: '' }),
  keyKpRightarrow: attr('string', { defaultValue: '' }),
  keyKpEnd: attr('string', { defaultValue: '' }),
  keyKpDownarrow: attr('string', { defaultValue: '' }),
  keyKpPgdn: attr('string', { defaultValue: '' }),
  keyKpEnter: attr('string', { defaultValue: '' }),
  keyKpIns: attr('string', { defaultValue: '' }),
  keyKpDel: attr('string', { defaultValue: '' }),
  keyMouse1: attr('string', { defaultValue: '+attack' }),
  keyMwheelup: attr('string', { defaultValue: '' }),
  keyMouse3: attr('string', { defaultValue: '' }),
  keyMwheeldown: attr('string', { defaultValue: '' }),
  keyMouse2: attr('string', { defaultValue: '+attack2' }),
  keyMouse4: attr('string', { defaultValue: '' }),
  keyMouse5: attr('string', { defaultValue: '' }),
  // crosshair
  clCrosshairstyle: attr('number', { defaultValue: 0 }),
  clCrosshaircolor: attr('number', { defaultValue: 1 }),
  clCrosshaircolorR: attr('number', { defaultValue: 50 }),
  clCrosshaircolorG: attr('number', { defaultValue: 250 }),
  clCrosshaircolorB: attr('number', { defaultValue: 50 }),
  clCrosshairalpha: attr('number', { defaultValue: 200 }),
  clCrosshairDrawoutline: attr('boolean', { defaultValue: true }),
  clCrosshairOutlinethickness: attr('number', { defaultValue: 1 }),
  clCrosshairsize: attr('number', { defaultValue: 5 }),
  clCrosshairthickness: attr('number', { defaultValue: 0.5 }),
  clCrosshairgap: attr('number', { defaultValue: 1 }),
  clCrosshairdot: attr('boolean', { defaultValue: true }),
});
