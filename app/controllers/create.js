import Ember from 'ember';
import Spinner from 'npm:spin.js';

export default Ember.Controller.extend({
  // inject ember services for flash message plugin
  toast: Ember.inject.service(),

  // query param for editing a saved config
  queryParams: ['permalink'],

  // starting value of the permalink query param
  permalink: null,

  actions: {
    // opens the preview modal
    // TODO: finish
    preview() {
      console.log('do something neat');
    },

    // downloads a config file
    download() {
      const outputText = this.get('config');
      const blob = new Blob([outputText], { type: 'text/plain' });
      saveAs(blob, 'autoexec.cfg');
    },

    // saves the config to the server and redirects to the show page or errors out
    save() {
      let spinner = new Spinner({ scale: 0.75 }).spin();
      let $btn = Ember.$('.Navigation-link--save');

      $btn.addClass('Navigation-link--disabled');
      $btn.attr('disabled', 'disabled');
      $btn.append(spinner.el);

      this.get('model').save().then(() => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('Navigation-link--disabled');
        Ember.get(this, 'toast').success('Configuration settings saved!', '', { positionClass: 'toast-bottom-right' });
        return this.transitionToRoute('show', this.get('model.permalink'));
      }, () => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('Navigation-link--disabled');
        return Ember.get(this, 'toast').error('Oops, something went wrong while trying to save. Please try again later.', '', { positionClass: 'toast-bottom-right' });
      });
    }
  },

  // creates the config which shows up in the preview window, observes the model for changes
  config: function() {
    const str = `// https://csgocfgr.com
                // === rate ===
                rate ${this.get('model.rate')}
                cl_cmdrate ${this.get('model.clCmdrate')}
                cl_updaterate ${this.get('model.clUpdaterate')}
                cl_interp ${this.get('model.clInterp')}
                cl_interp_ratio ${this.get('model.clInterpRatio')}
                cl_lagcompensation ${this.boolToNum(this.get('model.clLagcompensation'))}
                // === audio ===
                volume ${this.get('model.volume')}
                snd_musicvolume ${this.get('model.sndMusicvolume')}
                windows_speaker_config ${this.get('model.windowsSpeakerConfig')}
                snd_mixahead ${this.get('model.sndMixahead')}
                snd_headphone_pan_exponent ${this.get('model.sndHeadphonePanExponent')}
                snd_headphone_pan_radial_weight ${this.get('model.sndHeadphonePanRadialWeight')}
                snd_legacy_surround ${this.boolToNum(this.get('model.sndLegacySurround'))}
                snd_mute_losefocus ${this.boolToNum(this.get('model.sndMuteLosefocus'))}
                voice_scale ${this.get('model.voiceScale')}
                voice_enable ${this.boolToNum(this.get('model.voiceEnable'))}
                lobby_voice_chat_enabled ${this.boolToNum(this.get('model.lobbyVoiceChatEnabled'))}
                // === video ===
                mat_monitorgamma ${this.get('model.matMonitorgamma')}
                mat_queue_mode ${this.get('model.matQueueMode')}
                fps_max ${this.get('model.fpsMax')}
                fps_max_menu ${this.get('model.fpsMaxMenu')}
                r_dynamic ${this.boolToNum(this.get('model.rDynamic'))}
                r_drawtracers_firstperson ${this.boolToNum(this.get('model.rDrawtracersFirstperson'))}
                // === mouse ===
                sensitivity ${this.get('model.sensitivity')}
                zoom_sensitivity_ratio_mouse ${this.get('model.zoomSensitivityRatioMouse')}
                m_customaccel ${this.get('model.mCustomaccel')}
                m_rawinput ${this.boolToNum(this.get('model.mRawinput'))}
                // === miscellaneous ===
                con_filter_enable ${this.get('model.conFilterEnable')}
                ${this.showOrHide(this.get('model.conFilterText'), 'con_filter_text ' + this.get('model.conFilterText'))}
                ${this.showOrHide(this.get('model.conFilterTextOut'), 'con_filter_text_out ' + this.get('model.conFilterTextOut'))}
                mm_dedicated_search_maxping ${this.get('model.mmDedicatedSearchMaxping')}
                ui_steam_overlay_notification_position ${this.get('model.uiSteamOverlayNotificationPosition')}
                cl_downloadfilter ${this.get('model.clDownloadfilter')}
                developer ${this.boolToNum(this.get('model.developer'))}
                con_enable ${this.boolToNum(this.get('model.conEnable'))}
                player_nevershow_communityservermessage ${this.boolToNum(this.get('model.playerNevershowCommunityservermessage'))}
                gameinstructor_enable ${this.boolToNum(this.get('model.gameinstructorEnable'))}
                option_duck_method ${this.boolToNum(this.get('model.optionDuckMethod'))}
                option_speed_method ${this.boolToNum(this.get('model.optionSpeedMethod'))}
                cl_forcepreload ${this.boolToNum(this.get('model.clForcepreload'))}
                cl_disablehtmlmotd ${this.boolToNum(this.get('model.clDisablehtmlmotd'))}
                cl_autohelp ${this.boolToNum(this.get('model.clAutohelp'))}
                cl_showhelp ${this.boolToNum(this.get('model.clShowhelp'))}
                cl_disablefreezecam ${this.boolToNum(this.get('model.clDisablefreezecam'))}
                cl_teammate_colors_show ${this.get('model.clTeammateColorsShow')}
                cl_autowepswitch ${this.boolToNum(this.get('model.clAutowepswitch'))}
                cl_use_opens_buy_menu ${this.boolToNum(this.get('model.clUseOpensBuyMenu'))}
                closeonbuy ${this.boolToNum(this.get('model.closeonbuy'))}
                // === hud ===
                hud_scaling ${this.get('model.hudScaling')}
                cl_hud_background_alpha ${this.get('model.clHudBackgroundAlpha')}
                cl_hud_color ${this.get('model.clHudColor')}
                cl_loadout_colorweaponnames ${this.boolToNum(this.get('model.clLoadoutColorweaponnames'))}
                cl_hud_healthammo_style ${this.boolToNum(this.get('model.clHudHealthammoStyle'))}
                cl_hud_playercount_showcount ${this.boolToNum(this.get('model.clHudPlayercountShowcount'))}
                cl_hud_playercount_pos ${this.boolToNum(this.get('model.clHudPlayercountPos'))}
                viewmodel_fov ${this.get('model.viewmodelFov')}
                viewmodel_offset_x ${this.get('model.viewmodelOffsetX')}
                viewmodel_offset_y ${this.get('model.viewmodelOffsetY')}
                viewmodel_offset_z ${this.get('model.viewmodelOffsetZ')}
                viewmodel_presetpos ${this.get('model.viewmodelPresetpos')}
                cl_viewmodel_shift_left_amt ${this.get('model.clViewmodelShiftLeftAmt')}
                cl_viewmodel_shift_right_amt ${this.get('model.clViewmodelShiftRightAmt')}
                cl_bobcycle ${this.get('model.clBobcycle')}
                cl_bob_lower_amt ${this.get('model.clBobLowerAmt')}
                cl_bobamt_lat ${this.get('model.clBobamtLat')}
                cl_bobamt_vert ${this.get('model.clBobamtVert')}
                hud_showtargetid ${this.boolToNum(this.get('model.hudShowtargetid'))}
                cl_draw_only_deathnotices ${this.boolToNum(this.get('model.clDrawOnlyDeathnotices'))}
                cl_righthand ${this.boolToNum(this.get('model.clRighthand'))}
                cl_showloadout ${this.boolToNum(this.get('model.clShowloadout'))}
                cl_showpos ${this.boolToNum(this.get('model.clShowpos'))}
                cl_showfps ${this.get('model.clShowfps')}
                net_graph ${this.get('model.netGraph')}
                net_graphproportionalfont ${this.boolToNum(this.get('model.netGraphproportionalfont'))}
                // === radar ===
                cl_hud_radar_scale ${this.get('model.clHudRadarScale')}
                cl_radar_scale ${this.get('model.clRadarScale')}
                cl_radar_icon_scale_min ${this.get('model.clRadarIconScaleMin')}
                cl_radar_always_centered ${this.boolToNum(this.get('model.clRadarAlwaysCentered'))}
                cl_radar_rotate ${this.boolToNum(this.get('model.clRadarRotate'))}
                // === keybind ===
                ${this.showOrHide(this.get('model.keyEsc'), 'bind escape ' + this.get('model.keyEsc'))}
                ${this.showOrHide(this.get('model.keyF1'), 'bind f1 ' + this.get('model.keyF1'))}
                ${this.showOrHide(this.get('model.keyF2'), 'bind f2 ' + this.get('model.keyF2'))}
                ${this.showOrHide(this.get('model.keyF3'), 'bind f3 ' + this.get('model.keyF3'))}
                ${this.showOrHide(this.get('model.keyF4'), 'bind f4 ' + this.get('model.keyF4'))}
                ${this.showOrHide(this.get('model.keyF5'), 'bind f5 ' + this.get('model.keyF5'))}
                ${this.showOrHide(this.get('model.keyF6'), 'bind f6 ' + this.get('model.keyF6'))}
                ${this.showOrHide(this.get('model.keyF7'), 'bind f7 ' + this.get('model.keyF7'))}
                ${this.showOrHide(this.get('model.keyF8'), 'bind f8 ' + this.get('model.keyF8'))}
                ${this.showOrHide(this.get('model.keyF9'), 'bind f9 ' + this.get('model.keyF9'))}
                ${this.showOrHide(this.get('model.keyF10'), 'bind f10 ' + this.get('model.keyF10'))}
                ${this.showOrHide(this.get('model.keyF11'), 'bind f11 ' + this.get('model.keyF11'))}
                ${this.showOrHide(this.get('model.keyF12'), 'bind f12 ' + this.get('model.keyF12'))}
                ${this.showOrHide(this.get('model.keyK1'), 'bind 1 ' + this.get('model.keyK1'))}
                ${this.showOrHide(this.get('model.keyK2'), 'bind 2 ' + this.get('model.keyK2'))}
                ${this.showOrHide(this.get('model.keyK3'), 'bind 3 ' + this.get('model.keyK3'))}
                ${this.showOrHide(this.get('model.keyK4'), 'bind 4 ' + this.get('model.keyK4'))}
                ${this.showOrHide(this.get('model.keyK5'), 'bind 5 ' + this.get('model.keyK5'))}
                ${this.showOrHide(this.get('model.keyK6'), 'bind 6 ' + this.get('model.keyK6'))}
                ${this.showOrHide(this.get('model.keyK7'), 'bind 7 ' + this.get('model.keyK7'))}
                ${this.showOrHide(this.get('model.keyK8'), 'bind 8 ' + this.get('model.keyK8'))}
                ${this.showOrHide(this.get('model.keyK9'), 'bind 9 ' + this.get('model.keyK9'))}
                ${this.showOrHide(this.get('model.keyK0'), 'bind 0 ' + this.get('model.keyK0'))}
                ${this.showOrHide(this.get('model.keyHyphen'), 'bind - ' + this.get('model.keyHyphen'))}
                ${this.showOrHide(this.get('model.keyEquals'), 'bind = ' + this.get('model.keyEquals'))}
                ${this.showOrHide(this.get('model.keyBackspace'), 'bind backspace ' + this.get('model.keyBackspace'))}
                ${this.showOrHide(this.get('model.keyTab'), 'bind tab ' + this.get('model.keyTab'))}
                ${this.showOrHide(this.get('model.keyQ'), 'bind q ' + this.get('model.keyQ'))}
                ${this.showOrHide(this.get('model.keyW'), 'bind w ' + this.get('model.keyW'))}
                ${this.showOrHide(this.get('model.keyE'), 'bind e ' + this.get('model.keyE'))}
                ${this.showOrHide(this.get('model.keyR'), 'bind r ' + this.get('model.keyR'))}
                ${this.showOrHide(this.get('model.keyT'), 'bind t ' + this.get('model.keyT'))}
                ${this.showOrHide(this.get('model.keyY'), 'bind y ' + this.get('model.keyY'))}
                ${this.showOrHide(this.get('model.keyU'), 'bind u ' + this.get('model.keyU'))}
                ${this.showOrHide(this.get('model.keyI'), 'bind i ' + this.get('model.keyI'))}
                ${this.showOrHide(this.get('model.keyO'), 'bind o ' + this.get('model.keyO'))}
                ${this.showOrHide(this.get('model.keyP'), 'bind p ' + this.get('model.keyP'))}
                ${this.showOrHide(this.get('model.keyLbracket'), 'bind [ ' + this.get('model.keyLbracket'))}
                ${this.showOrHide(this.get('model.keyRbracket'), 'bind ] ' + this.get('model.keyRbracket'))}
                ${this.showOrHide(this.get('model.keyBkslash'), 'bind \\ ' + this.get('model.keyBkslash'))}
                ${this.showOrHide(this.get('model.keyCapslock'), 'bind caps ' + this.get('model.keyCapslock'))}
                ${this.showOrHide(this.get('model.keyA'), 'bind a ' + this.get('model.keyA'))}
                ${this.showOrHide(this.get('model.keyS'), 'bind s ' + this.get('model.keyS'))}
                ${this.showOrHide(this.get('model.keyD'), 'bind d ' + this.get('model.keyD'))}
                ${this.showOrHide(this.get('model.keyF'), 'bind f ' + this.get('model.keyF'))}
                ${this.showOrHide(this.get('model.keyG'), 'bind g ' + this.get('model.keyG'))}
                ${this.showOrHide(this.get('model.keyH'), 'bind h ' + this.get('model.keyH'))}
                ${this.showOrHide(this.get('model.keyJ'), 'bind j ' + this.get('model.keyJ'))}
                ${this.showOrHide(this.get('model.keyK'), 'bind k ' + this.get('model.keyK'))}
                ${this.showOrHide(this.get('model.keyL'), 'bind l ' + this.get('model.keyL'))}
                ${this.showOrHide(this.get('model.keySemicolon'), 'bind ; ' + this.get('model.keySemicolon'))}
                ${this.showOrHide(this.get('model.keyApostrophe'), 'bind \' ' + this.get('model.keyApostrophe'))}
                ${this.showOrHide(this.get('model.keyEnter'), 'bind enter ' + this.get('model.keyEnter'))}
                ${this.showOrHide(this.get('model.keyShift'), 'bind shift ' + this.get('model.keyShift'))}
                ${this.showOrHide(this.get('model.keyZ'), 'bind z ' + this.get('model.keyZ'))}
                ${this.showOrHide(this.get('model.keyX'), 'bind x ' + this.get('model.keyX'))}
                ${this.showOrHide(this.get('model.keyC'), 'bind c ' + this.get('model.keyC'))}
                ${this.showOrHide(this.get('model.keyV'), 'bind v ' + this.get('model.keyV'))}
                ${this.showOrHide(this.get('model.keyB'), 'bind b ' + this.get('model.keyB'))}
                ${this.showOrHide(this.get('model.keyN'), 'bind n ' + this.get('model.keyN'))}
                ${this.showOrHide(this.get('model.keyM'), 'bind m ' + this.get('model.keyM'))}
                ${this.showOrHide(this.get('model.keyComma'), 'bind , ' + this.get('model.keyComma'))}
                ${this.showOrHide(this.get('model.keyPeriod'), 'bind . ' + this.get('model.keyPeriod'))}
                ${this.showOrHide(this.get('model.keyFwslash'), 'bind / ' + this.get('model.keyFwslash'))}
                ${this.showOrHide(this.get('model.keyCtrl'), 'bind ctrl ' + this.get('model.keyCtrl'))}
                ${this.showOrHide(this.get('model.keyAlt'), 'bind alt ' + this.get('model.keyAlt'))}
                ${this.showOrHide(this.get('model.keySpace'), 'bind space ' + this.get('model.keySpace'))}
                ${this.showOrHide(this.get('model.keyPause'), 'bind pause ' + this.get('model.keyPause'))}
                ${this.showOrHide(this.get('model.keyIns'), 'bind ins ' + this.get('model.keyIns'))}
                ${this.showOrHide(this.get('model.keyHome'), 'bind home ' + this.get('model.keyHome'))}
                ${this.showOrHide(this.get('model.keyPgup'), 'bind pgup ' + this.get('model.keyPgup'))}
                ${this.showOrHide(this.get('model.keyDel'), 'bind del ' + this.get('model.keyDel'))}
                ${this.showOrHide(this.get('model.keyEnd'), 'bind end ' + this.get('model.keyEnd'))}
                ${this.showOrHide(this.get('model.keyPgdn'), 'bind pgdn ' + this.get('model.keyPgdn'))}
                ${this.showOrHide(this.get('model.keyUparrow'), 'bind uparrow ' + this.get('model.keyUparrow'))}
                ${this.showOrHide(this.get('model.keyLeftarrow'), 'bind leftarrow ' + this.get('model.keyLeftarrow'))}
                ${this.showOrHide(this.get('model.keyDownarrow'), 'bind downarrow ' + this.get('model.keyDownarrow'))}
                ${this.showOrHide(this.get('model.keyRightarrow'), 'bind rightarrow ' + this.get('model.keyRightarrow'))}
                ${this.showOrHide(this.get('model.keyKpSlash'), 'bind kp_slash ' + this.get('model.keyKpSlash'))}
                ${this.showOrHide(this.get('model.keyKpMultiply'), 'bind kp_multiply ' + this.get('model.keyKpMultiply'))}
                ${this.showOrHide(this.get('model.keyKpMinus'), 'bind kp_minus ' + this.get('model.keyKpMinus'))}
                ${this.showOrHide(this.get('model.keyKpHome'), 'bind kp_home ' + this.get('model.keyKpHome'))}
                ${this.showOrHide(this.get('model.keyKpUparrow'), 'bind kp_uparrow ' + this.get('model.keyKpUparrow'))}
                ${this.showOrHide(this.get('model.keyKpPgup'), 'bind kp_pgup ' + this.get('model.keyKpPgup'))}
                ${this.showOrHide(this.get('model.keyKpPlus'), 'bind kp_plus ' + this.get('model.keyKpPlus'))}
                ${this.showOrHide(this.get('model.keyKpLeftarrow'), 'bind kp_leftarrow ' + this.get('model.keyKpLeftarrow'))}
                ${this.showOrHide(this.get('model.keyKp5'), 'bind kp_5 ' + this.get('model.keyKp5'))}
                ${this.showOrHide(this.get('model.keyKpRightarrow'), 'bind kp_rightarrow ' + this.get('model.keyKpRightarrow'))}
                ${this.showOrHide(this.get('model.keyKpEnd'), 'bind kp_end ' + this.get('model.keyKpEnd'))}
                ${this.showOrHide(this.get('model.keyKpDownarrow'), 'bind kp_downarrow ' + this.get('model.keyKpDownarrow'))}
                ${this.showOrHide(this.get('model.keyKpPgdn'), 'bind kp_pgdn ' + this.get('model.keyKpPgdn'))}
                ${this.showOrHide(this.get('model.keyKpEnter'), 'bind kp_enter ' + this.get('model.keyKpEnter'))}
                ${this.showOrHide(this.get('model.keyKpIns'), 'bind kp_ins ' + this.get('model.keyKpIns'))}
                ${this.showOrHide(this.get('model.keyKpDel'), 'bind kp_del ' + this.get('model.keyKpDel'))}
                ${this.showOrHide(this.get('model.keyMouse1'), 'bind mouse1 ' + this.get('model.keyMouse1'))}
                ${this.showOrHide(this.get('model.keyMwheelup'), 'bind mwheelup ' + this.get('model.keyMwheelup'))}
                ${this.showOrHide(this.get('model.keyMouse3'), 'bind mouse3 ' + this.get('model.keyMouse3'))}
                ${this.showOrHide(this.get('model.keyMwheeldown'), 'bind mwheeldown ' + this.get('model.keyMwheeldown'))}
                ${this.showOrHide(this.get('model.keyMouse2'), 'bind mouse2 ' + this.get('model.keyMouse2'))}
                ${this.showOrHide(this.get('model.keyMouse4'), 'bind mouse4 ' + this.get('model.keyMouse4'))}
                ${this.showOrHide(this.get('model.keyMouse5'), 'bind mouse5 ' + this.get('model.keyMouse5'))}
                // === crosshair ===
                cl_crosshairstyle ${this.get('model.clCrosshairstyle')}
                cl_crosshaircolor ${this.get('model.clCrosshaircolor')}
                cl_crosshaircolor_r ${this.get('model.clCrosshaircolorR')}
                cl_crosshaircolor_g ${this.get('model.clCrosshaircolorG')}
                cl_crosshaircolor_b ${this.get('model.clCrosshaircolorB')}
                cl_crosshairalpha ${this.get('model.clCrosshairalpha')}
                cl_crosshairusealpha 1
                cl_crosshair_drawoutline ${this.boolToNum(this.get('model.clCrosshairDrawoutline'))}
                cl_crosshair_outlinethickness ${this.get('model.clCrosshairOutlinethickness')}
                cl_crosshairsize ${this.get('model.clCrosshairsize')}
                cl_crosshairthickness ${this.get('model.clCrosshairthickness')}
                cl_crosshairgap ${this.get('model.clCrosshairgap')}
                cl_crosshairdot ${this.boolToNum(this.get('model.clCrosshairdot'))}`;

    return str.replace(/^\s+/gm, '');
  }.property('model.{rate,clCmdrate,clUpdaterate,clInterp,clInterpRatio,clLagcompensation,volume,sndMusicvolume,windowsSpeakerConfig,sndMixahead,sndHeadphonePanExponent,sndHeadphonePanRadialWeight,sndLegacySurround,sndMuteLosefocus,voiceScale,voiceEnable,lobbyVoiceChatEnabled,matMonitorgamma,matQueueMode,fpsMax,fpsMaxMenu,rDynamic,rDrawtracersFirstperson,sensitivity,zoomSensitivityRatioMouse,mCustomaccel,mRawinput,conFilterEnable,conFilterText,conFilterTextOut,mmDedicatedSearchMaxping,uiSteamOverlayNotificationPosition,clDownloadfilter,developer,conEnable,playerNevershowCommunityservermessage,gameinstructorEnable,optionDuckMethod,optionSpeedMethod,clForcepreload,clDisablehtmlmotd,clAutohelp,clShowhelp,clDisablefreezecam,clTeammateColorsShow,clAutowepswitch,clUseOpensBuyMenu,closeonbuy,hudScaling,clHudBackgroundAlpha,clHudColor,clLoadoutColorweaponnames,clHudHealthammoStyle,clHudPlayercountShowcount,clHudPlayercountPos,viewmodelFov,viewmodelOffsetX,viewmodelOffsetY,viewmodelOffsetZ,viewmodelPresetpos,clViewmodelShiftLeftAmt,clViewmodelShiftRightAmt,clBobcycle,clBobLowerAmt,clBobamtLat,clBobamtVert,hudShowtargetid,clDrawOnlyDeathnotices,clRighthand,clShowloadout,clShowpos,clShowfps,netGraph,netGraphproportionalfont,clHudRadarScale,clRadarScale,clRadarIconScaleMin,clRadarAlwaysCentered,clRadarRotate,keyEsc,keyF1,keyF2,keyF3,keyF4,keyF5,keyF6,keyF7,keyF8,keyF9,keyF10,keyF11,keyF12,keyK1,keyK2,keyK3,keyK4,keyK5,keyK6,keyK7,keyK8,keyK9,keyK0,keyHyphen,keyEquals,keyBackspace,keyTab,keyQ,keyW,keyE,keyR,keyT,keyY,keyU,keyI,keyO,keyP,keyLbracket,keyRbracket,keyBkslash,keyCapslock,keyA,keyS,keyD,keyF,keyG,keyH,keyJ,keyK,keyL,keySemicolon,keyApostrophe,keyEnter,keyShift,keyZ,keyX,keyC,keyV,keyB,keyN,keyM,keyComma,keyPeriod,keyFwslash,keyCtrl,keyAlt,keySpace,keyPause,keyIns,keyHome,keyPgup,keyDel,keyEnd,keyPgdn,keyUparrow,keyLeftarrow,keyDownarrow,keyRightarrow,keyKpSlash,keyKpMultiply,keyKpMinus,keyKpHome,keyKpUparrow,keyKpPgup,keyKpPlus,keyKpLeftarrow,keyKp5,keyKpRightarrow,keyKpEnd,keyKpDownarrow,keyKpPgdn,keyKpEnter,keyKpIns,keyKpDel,keyMouse1,keyMwheelup,keyMouse3,keyMwheeldown,keyMouse2,keyMouse4,keyMouse5,clCrosshairstyle,clCrosshaircolor,clCrosshaircolorR,clCrosshaircolorG,clCrosshaircolorB,clCrosshairalpha,clCrosshairDrawoutline,clCrosshairOutlinethickness,clCrosshairsize,clCrosshairthickness,clCrosshairgap,clCrosshairdot}'),

  // changes a boolean value to either a 1 or a 0
  boolToNum(value) {
    return value ? 1 : 0;
  },

  // shows or hides a command from the preview window if it is empty
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
