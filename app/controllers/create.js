import Ember from 'ember';

export default Ember.Controller.extend({

  createConfig: function() {
// const config = `// === rate ===
// rate ${this.get('model.rate')}
// cl_cmdrate ${this.get('model.clCmdrate')}
// cl_updaterate ${this.get('model.clUpdaterate')}
// cl_interp ${this.get('model.clInterp')}
// cl_interp_ratio ${this.get('model.clInterpRatio')}
// cl_lagcompensation ${this.boolToNum(this.get('model.clLagcompensation'))}`;

// const config = `// === audio ===
// volume ${this.get('model.volume')}
// snd_musicvolume ${this.get('model.sndMusicvolume')}
// windows_speaker_config ${this.get('model.windowsSpeakerConfig')}
// snd_mixahead ${this.get('model.sndMixahead')}
// snd_headphone_pan_exponent ${this.get('model.sndHeadphonePanExponent')}
// snd_headphone_pan_radial_weight ${this.get('model.sndHeadphonePanRadialWeight')}
// snd_legacy_surround ${this.boolToNum(this.get('model.sndLegacySurround'))}
// snd_mute_losefocus ${this.boolToNum(this.get('model.sndMuteLosefocus'))}
// voice_scale ${this.get('model.voiceScale')}
// voice_enable ${this.boolToNum(this.get('model.voiceEnable'))}
// lobby_voice_chat_enabled ${this.boolToNum(this.get('model.lobbyVoiceChatEnabled'))}`;

// const config = `// === video ===
// mat_monitorgamma ${this.get('model.matMonitorgamma')}
// mat_queue_mode ${this.get('model.matQueueMode')}
// fps_max ${this.get('model.fpsMax')}
// fps_max_menu ${this.get('model.fpsMaxMenu')}
// r_dynamic ${this.boolToNum(this.get('model.rDynamic'))}
// r_drawtracers_firstperson ${this.boolToNum(this.get('model.rDrawtracersFirstperson'))}`;

const config = `// === mouse ===
sensitivity ${this.get('model.sensitivity')}
zoom_sensitivity_ratio_mouse ${this.get('model.zoomSensitivityRatioMouse')}
m_customaccel ${this.get('model.mCustomaccel')}
m_rawinput ${this.boolToNum(this.get('model.mRawinput'))}`;
// // === miscellaneous ===
// con_filter_enable ${this.get('model.conFilterEnable')}
// ${this.showOrHide(this.get('model.conFilterText'), 'con_filter_text ' + this.get('model.conFilterText'))}
// ${this.showOrHide(this.get('model.conFilterTextOut'), 'con_filter_text_out ' + this.get('model.conFilterTextOut'))}
// mm_dedicated_search_maxping ${this.get('model.mmDedicatedSearchMaxping')}
// ui_steam_overlay_notification_position ${this.get('model.uiSteamOverlayNotificationPosition')}
// cl_downloadfilter ${this.get('model.clDownloadfilter')}
// developer ${this.boolToNum(this.get('model.developer'))}
// con_enable ${this.boolToNum(this.get('model.conEnable'))}
// player_nevershow_communityservermessage ${this.boolToNum(this.get('model.playerNevershowCommunityservermessage'))}
// gameinstructor_enable ${this.boolToNum(this.get('model.gameinstructorEnable'))}
// option_duck_method ${this.boolToNum(this.get('model.optionDuckMethod'))}
// option_speed_method ${this.boolToNum(this.get('model.optionSpeedMethod'))}
// cl_forcepreload ${this.boolToNum(this.get('model.clForcepreload'))}
// cl_disablehtmlmotd ${this.boolToNum(this.get('model.clDisablehtmlmotd'))}
// cl_autohelp ${this.boolToNum(this.get('model.clAutohelp'))}
// cl_showhelp ${this.boolToNum(this.get('model.clShowhelp'))}
// cl_disablefreezecam ${this.boolToNum(this.get('model.clDisablefreezecam'))}
// cl_teammate_colors_show ${this.get('model.clTeammateColorsShow')}
// cl_autowepswitch ${this.boolToNum(this.get('model.clAutowepswitch'))}
// cl_use_opens_buy_menu ${this.boolToNum(this.get('model.clUseOpensBuyMenu'))}
// closeonbuy ${this.boolToNum(this.get('model.closeonbuy'))}`;
    return config;
  }.property('model.{rate,clCmdrate,clUpdaterate,clInterp,clInterpRatio,clLagcompensation,volume,sndMusicvolume,windowsSpeakerConfig,sndMixahead,sndHeadphonePanExponent,sndHeadphonePanRadialWeight,sndLegacySurround,sndMuteLosefocus,voiceScale,voiceEnable,lobbyVoiceChatEnabled,matMonitorgamma,matQueueMode,fpsMax,fpsMaxMenu,rDynamic,rDrawtracersFirstperson,sensitivity,zoomSensitivityRatioMouse,mCustomaccel,mRawinput,conFilterEnable,conFilterText,conFilterTextOut,mmDedicatedSearchMaxping,clDownloadfilter,developer,conEnable,playerNevershowCommunityservermessage,gameinstructorEnable,optionDuckMethod,optionSpeedMethod,clForcepreload,clDisablehtmlmotd,clAutohelp,clShowhelp,clDisablefreezecam,clTeammateColorsShow,clAutowepswitch,clUseOpensBuyMenu,closeonbuy}'),

  boolToNum(value) {
    return value ? 1 : 0;
  },

  showOrHide(value, string) {
    if (value === null || value === undefined) {
      return '';
    } else if (value.length > 0) {
      return string;
    } else {
      return '';
    }
  }

});
