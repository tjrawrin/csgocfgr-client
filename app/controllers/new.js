import Ember from 'ember';

export default Ember.ObjectController.extend({
  honeyPot: '',
  actions: {
    download: function() {
      if (this.get('honeyPot').length > 0) {
        return false;
      } else {
        return this.send('downloadUnsavedFile');
      }
    },
    saveAndDownload: function() {
      var self = this;
      if (this.get('honeyPot').length > 0) {
        return false;
      } else {
        Ember.$('button.btn--download__save').attr('disabled', 'disabled');
        setTimeout(function() {
          Ember.$('button.btn--download__save').removeAttr('disabled');
        }, 3000);
        this.get('model').save().then(function(data) {
          self.transitionToRoute('show', data).then(function() {
              return self.send('downloadSavedFile');
          });
        });
      }
    },
    quickUseSelection: function () {
      var element = document.getElementById('autoexec-output');

      if(element.selectionEnd - element.selectionStart === 0) {
        return;
      }

      var selectedText = element.value.substr(element.selectionStart, element.selectionEnd - element.selectionStart);
      selectedText = selectedText.replace(/[\n]/g, '; ');
      prompt('Copy and Paste the text below into your console in game:', selectedText);

      element.selectionStart = 0;
      element.selectionEnd = 0;
    },
    setToDefaultValue: function() {
      return this.send('setToDefaultValue');
    }
  },
  renderConfig: function() {
    var string =
      '// AutoExec created with CS:GO Configr \n' +
      '\n' +
      '// === Rates === \n' +
      'rate ' + '"' + this.get('model.rate') + '"' + '\n' +
      'cl_cmdrate ' + '"' + this.get('model.clCmdrate') + '"' + '\n' +
      'cl_updaterate ' + '"' + this.get('model.clUpdaterate') + '"' + '\n' +
      'cl_interp ' + '"' + this.get('model.clInterp')  + '"' + '\n' +
      'cl_interp_ratio ' + '"' + this.get('model.clInterpRatio')  + '"' + '\n' +
      'cl_lagcompensation ' + '"' + this.boolToNum(this.get('model.clLagcompensation'))  + '"' + '\n\n' +
      '// === Audio === \n' +
      'volume ' + '"' + this.get('model.volume') + '"' + '\n' +
      'snd_musicvolume ' + '"' + this.get('model.sndMusicvolume') + '"' + '\n' +
      'windows_speaker_config ' + '"' + this.get('model.windowsSpeakerConfig') + '"' + '\n' +
      'snd_mixahead ' + '"' + this.get('model.sndMixahead') + '"' + '\n' +
      'snd_headphone_pan_exponent ' + '"' + this.get('model.sndHeadphonePanExponent') + '"' + '\n' +
      'snd_headphone_pan_radial_weight ' + '"' + this.get('model.sndHeadphonePanRadialWeight') + '"' + '\n' +
      'snd_legacy_surround ' + '"' + this.boolToNum(this.get('model.sndLegacySurround')) + '"' + '\n' +
      'snd_mute_losefocus  ' + '"' + this.boolToNum(this.get('model.sndMuteLosefocus')) + '"' + '\n' +
      'voice_scale ' + '"' + this.get('model.voiceScale') + '"' + '\n' +
      'voice_enable ' + '"' + this.boolToNum(this.get('model.voiceEnable')) + '"' + '\n' +
      'lobby_voice_chat_enabled ' + '"' + this.boolToNum(this.get('model.lobbyVoiceChatEnabled')) + '"' + '\n\n' +
      '// === Video === \n' +
      'mat_monitorgamma ' + '"' + this.get('model.matMonitorgamma') + '"' + '\n' +
      'mat_queue_mode ' + '"' + this.get('model.matQueueMode') + '"' + '\n' +
      'fps_max ' + '"' + this.get('model.fpsMax') + '"' + '\n' +
      'fps_max_menu ' + '"' + this.get('model.fpsMaxMenu') + '"' + '\n' +
      'r_dynamic ' + '"' + this.boolToNum(this.get('model.rDynamic')) + '"' + '\n' +
      'r_drawtracers_firstperson ' + '"' + this.boolToNum(this.get('model.rDrawtracersFirstperson')) + '"' + '\n\n' +
      '// === Mouse === \n' +
      'sensitivity ' + '"' + this.get('model.sensitivity') + '"' + '\n' +
      'zoom_sensitivity_ratio_mouse ' + '"' + this.get('model.zoomSensitivityRatioMouse') + '"' + '\n' +
      'm_customaccel ' + '"' + this.get('model.mCustomaccel') + '"' + '\n' +
      'm_rawinput ' + '"' + this.boolToNum(this.get('model.mRawinput')) + '"' + '\n\n' +
      '// === Miscellaneous === \n' +
      'con_filter_enable ' + '"' + this.get('model.conFilterEnable') + '"' + '\n' +
      this.showOrHide(this.get('model.conFilterText'), 'con_filter_text ' + '"' + this.get('model.conFilterText') + '"' + '\n') +
      this.showOrHide(this.get('model.conFilterTextOut'), 'con_filter_text_out ' + '"' + this.get('model.conFilterTextOut') + '"' + '\n') +
      'mm_dedicated_search_maxping ' + '"' + this.get('model.mmDedicatedSearchMaxping') + '"' + '\n' +
      'ui_steam_overlay_notification_position ' + '"' + this.boolToNum(this.get('model.uiSteamOverlayNotificationPosition')) + '"' + '\n' +
      'cl_downloadfilter ' + '"' + this.boolToNum(this.get('model.clDownloadfilter')) + '"' + '\n' +
      'developer ' + '"' + this.boolToNum(this.get('model.developer')) + '"' + '\n' +
      'con_enable ' + '"' + this.boolToNum(this.get('model.conEnable')) + '"' + '\n' +
      'player_nevershow_communityservermessage ' + '"' + this.boolToNum(this.get('model.playerNevershowCommunityservermessage')) + '"' + '\n' +
      'gameinstructor_enable ' + '"' + this.boolToNum(this.get('model.gameinstructorEnable')) + '"' + '\n' +
      'option_duck_method ' + '"' + this.boolToNum(this.get('model.optionDuckMethod')) + '"' + '\n' +
      'option_speed_method ' + '"' + this.boolToNum(this.get('model.optionSpeedMethod')) + '"' + '\n' +
      'cl_forcepreload ' + '"' + this.boolToNum(this.get('model.clForcepreload')) + '"' + '\n' +
      'cl_disablehtmlmotd ' + '"' + this.boolToNum(this.get('model.clDisablehtmlmotd')) + '"' + '\n' +
      'cl_autohelp ' + '"' + this.boolToNum(this.get('model.clAutohelp')) + '"' + '\n' +
      'cl_showhelp ' + '"' + this.boolToNum(this.get('model.clShowhelp')) + '"' + '\n' +
      'cl_disablefreezecam ' + '"' + this.boolToNum(this.get('model.clDisablefreezecam')) + '"' + '\n' +
      'cl_teammate_colors_show ' + '"' + this.get('model.clTeammateColorsShow') + '"' + '\n' +
      'cl_autowepswitch ' + '"' + this.boolToNum(this.get('model.clAutowepswitch')) + '"' + '\n' +
      'cl_use_opens_buy_menu ' + '"' + this.boolToNum(this.get('model.clUseOpensBuyMenu')) + '"' + '\n' +
      'closeonbuy ' + '"' + this.boolToNum(this.get('model.closeonbuy')) + '"' + '\n\n' +
      '// === HUD === \n' +
      'hud_scaling ' + '"' + this.get('model.hudScaling') + '"' + '\n' +
      'cl_hud_background_alpha ' + '"' + this.get('model.clHudBackgroundAlpha') + '"' + '\n' +
      'cl_hud_color ' + '"' + this.get('model.clHudColor') + '"' + '\n' +
      'cl_loadout_colorweaponnames ' + '"' + this.boolToNum(this.get('model.clLoadoutColorweaponnames')) + '"' + '\n' +
      'cl_hud_healthammo_style ' + '"' + this.boolToNum(this.get('model.clHudHealthammoStyle')) + '"' + '\n' +
      'cl_hud_playercount_showcount ' + '"' + this.boolToNum(this.get('model.clHudPlayercountShowcount')) + '"' + '\n' +
      'cl_hud_playercount_pos ' + '"' + this.boolToNum(this.get('model.clHudPlayercountPos')) + '"' + '\n' +
      'viewmodel_fov ' + '"' + this.get('model.viewmodelFov') + '"' + '\n' +
      'viewmodel_offset_x ' + '"' + this.get('model.viewmodelOffsetX') + '"' + '\n' +
      'viewmodel_offset_y ' + '"' + this.get('model.viewmodelOffsetY') + '"' + '\n' +
      'viewmodel_offset_z ' + '"' + this.get('model.viewmodelOffsetZ') + '"' + '\n' +
      'viewmodel_presetpos ' + '"' + this.get('model.viewmodelPresetpos') + '"' + '\n' +
      'cl_viewmodel_shift_left_amt ' + '"' + this.get('model.clViewmodelShiftLeftAmt') + '"' + '\n' +
      'cl_viewmodel_shift_right_amt ' + '"' + this.get('model.clViewmodelShiftRightAmt') + '"' + '\n' +
      'cl_bobcycle ' + '"' + this.get('model.clBobcycle') + '"' + '\n' +
      'cl_bob_lower_amt ' + '"' + this.get('model.clBobLowerAmt') + '"' + '\n' +
      'cl_bobamt_lat ' + '"' + this.get('model.clBobamtLat') + '"' + '\n' +
      'cl_bobamt_vert ' + '"' + this.get('model.clBobamtVert') + '"' + '\n' +
      'hud_showtargetid ' + '"' + this.boolToNum(this.get('model.hudShowtargetid')) + '"' + '\n' +
      'cl_draw_only_deathnotices ' + '"' + this.boolToNum(this.get('model.clDrawOnlyDeathnotices')) + '"' + '\n' +
      'cl_righthand ' + '"' + this.boolToNum(this.get('model.clRighthand')) + '"' + '\n' +
      'cl_showloadout ' + '"' + this.boolToNum(this.get('model.clShowloadout')) + '"' + '\n' +
      'cl_showpos ' + '"' + this.boolToNum(this.get('model.clShowpos')) + '"' + '\n' +
      'cl_showfps ' + '"' + this.get('model.clShowfps') + '"' + '\n' +
      'net_graph ' + '"' + this.get('model.netGraph') + '"' + '\n' +
      'net_graphproportionalfont ' + '"' + this.boolToNum(this.get('model.netGraphproportionalfont')) + '"' + '\n\n' +
      '// === Radar === \n' +
      'cl_hud_radar_scale ' + '"' + this.get('model.clHudRadarScale') + '"' + '\n' +
      'cl_radar_scale ' + '"' + this.get('model.clRadarScale') + '"' + '\n' +
      'cl_radar_icon_scale_min ' + '"' + this.get('model.clRadarIconScaleMin') + '"' + '\n' +
      'cl_radar_always_centered ' + '"' + this.boolToNum(this.get('model.clRadarAlwaysCentered')) + '"' + '\n' +
      'cl_radar_rotate ' + '"' + this.boolToNum(this.get('model.clRadarRotate')) + '"' + '\n\n' +
      '// === Keybind === \n' +
      this.showOrHide(this.get('model.keyEsc'), 'bind escape ' + '"' + this.get('model.keyEsc') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF1'), 'bind f1 ' + '"' + this.get('model.keyF1') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF2'), 'bind f2 ' + '"' + this.get('model.keyF2') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF3'), 'bind f3 ' + '"' + this.get('model.keyF3') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF4'), 'bind f4 ' + '"' + this.get('model.keyF4') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF5'), 'bind f5 ' + '"' + this.get('model.keyF5') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF6'), 'bind f6 ' + '"' + this.get('model.keyF6') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF7'), 'bind f7 ' + '"' + this.get('model.keyF7') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF8'), 'bind f8 ' + '"' + this.get('model.keyF8') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF9'), 'bind f9 ' + '"' + this.get('model.keyF9') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF10'), 'bind f10 ' + '"' + this.get('model.keyF10') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF11'), 'bind f11 ' + '"' + this.get('model.keyF11') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF12'), 'bind f12 ' + '"' + this.get('model.keyF12') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK1'), 'bind 1 ' + '"' + this.get('model.keyK1') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK2'), 'bind 2 ' + '"' + this.get('model.keyK2') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK3'), 'bind 3 ' + '"' + this.get('model.keyK3') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK4'), 'bind 4 ' + '"' + this.get('model.keyK4') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK5'), 'bind 5 ' + '"' + this.get('model.keyK5') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK6'), 'bind 6 ' + '"' + this.get('model.keyK6') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK7'), 'bind 7 ' + '"' + this.get('model.keyK7') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK8'), 'bind 8 ' + '"' + this.get('model.keyK8') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK9'), 'bind 9 ' + '"' + this.get('model.keyK9') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK0'), 'bind 0 ' + '"' + this.get('model.keyK0') + '"' + '\n') +
      this.showOrHide(this.get('model.keyHyphen'), 'bind - ' + '"' + this.get('model.keyHyphen') + '"' + '\n') +
      this.showOrHide(this.get('model.keyEquals'), 'bind = ' + '"' + this.get('model.keyEquals') + '"' + '\n') +
      this.showOrHide(this.get('model.keyBackspace'), 'bind backspace ' + '"' + this.get('model.keyBackspace') + '"' + '\n') +
      this.showOrHide(this.get('model.keyTab'), 'bind tab ' + '"' + this.get('model.keyTab') + '"' + '\n') +
      this.showOrHide(this.get('model.keyQ'), 'bind q ' + '"' + this.get('model.keyQ') + '"' + '\n') +
      this.showOrHide(this.get('model.keyW'), 'bind w ' + '"' + this.get('model.keyW') + '"' + '\n') +
      this.showOrHide(this.get('model.keyE'), 'bind e ' + '"' + this.get('model.keyE') + '"' + '\n') +
      this.showOrHide(this.get('model.keyR'), 'bind r ' + '"' + this.get('model.keyR') + '"' + '\n') +
      this.showOrHide(this.get('model.keyT'), 'bind t ' + '"' + this.get('model.keyT') + '"' + '\n') +
      this.showOrHide(this.get('model.keyY'), 'bind y ' + '"' + this.get('model.keyY') + '"' + '\n') +
      this.showOrHide(this.get('model.keyU'), 'bind u ' + '"' + this.get('model.keyU') + '"' + '\n') +
      this.showOrHide(this.get('model.keyI'), 'bind i ' + '"' + this.get('model.keyI') + '"' + '\n') +
      this.showOrHide(this.get('model.keyO'), 'bind o ' + '"' + this.get('model.keyO') + '"' + '\n') +
      this.showOrHide(this.get('model.keyP'), 'bind p ' + '"' + this.get('model.keyP') + '"' + '\n') +
      this.showOrHide(this.get('model.keyLbracket'), 'bind [ ' + '"' + this.get('model.keyLbracket') + '"' + '\n') +
      this.showOrHide(this.get('model.keyRbracket'), 'bind ] ' + '"' + this.get('model.keyRbracket') + '"' + '\n') +
      this.showOrHide(this.get('model.keyBkslash'), 'bind \\ ' + '"' + this.get('model.keyBkslash') + '"' + '\n') +
      this.showOrHide(this.get('model.keyCapslock'), 'bind caps ' + '"' + this.get('model.keyCapslock') + '"' + '\n') +
      this.showOrHide(this.get('model.keyA'), 'bind a ' + '"' + this.get('model.keyA') + '"' + '\n') +
      this.showOrHide(this.get('model.keyS'), 'bind s ' + '"' + this.get('model.keyS') + '"' + '\n') +
      this.showOrHide(this.get('model.keyD'), 'bind d ' + '"' + this.get('model.keyD') + '"' + '\n') +
      this.showOrHide(this.get('model.keyF'), 'bind f ' + '"' + this.get('model.keyF') + '"' + '\n') +
      this.showOrHide(this.get('model.keyG'), 'bind g ' + '"' + this.get('model.keyG') + '"' + '\n') +
      this.showOrHide(this.get('model.keyH'), 'bind h ' + '"' + this.get('model.keyH') + '"' + '\n') +
      this.showOrHide(this.get('model.keyJ'), 'bind j ' + '"' + this.get('model.keyJ') + '"' + '\n') +
      this.showOrHide(this.get('model.keyK'), 'bind k ' + '"' + this.get('model.keyK') + '"' + '\n') +
      this.showOrHide(this.get('model.keyL'), 'bind l ' + '"' + this.get('model.keyL') + '"' + '\n') +
      this.showOrHide(this.get('model.keySemicolon'), 'bind ; ' + '"' + this.get('model.keySemicolon') + '"' + '\n') +
      this.showOrHide(this.get('model.keyApostrophe'), 'bind &#39; ' + '"' + this.get('model.keyApostrophe') + '"' + '\n') +
      this.showOrHide(this.get('model.keyEnter'), 'bind enter ' + '"' + this.get('model.keyEnter') + '"' + '\n') +
      this.showOrHide(this.get('model.keyShift'), 'bind shift ' + '"' + this.get('model.keyShift') + '"' + '\n') +
      this.showOrHide(this.get('model.keyZ'), 'bind z ' + '"' + this.get('model.keyZ') + '"' + '\n') +
      this.showOrHide(this.get('model.keyX'), 'bind x ' + '"' + this.get('model.keyX') + '"' + '\n') +
      this.showOrHide(this.get('model.keyC'), 'bind c ' + '"' + this.get('model.keyC') + '"' + '\n') +
      this.showOrHide(this.get('model.keyV'), 'bind v ' + '"' + this.get('model.keyV') + '"' + '\n') +
      this.showOrHide(this.get('model.keyB'), 'bind b ' + '"' + this.get('model.keyB') + '"' + '\n') +
      this.showOrHide(this.get('model.keyN'), 'bind n ' + '"' + this.get('model.keyN') + '"' + '\n') +
      this.showOrHide(this.get('model.keyM'), 'bind m ' + '"' + this.get('model.keyM') + '"' + '\n') +
      this.showOrHide(this.get('model.keyComma'), 'bind , ' + '"' + this.get('model.keyComma') + '"' + '\n') +
      this.showOrHide(this.get('model.keyPeriod'), 'bind . ' + '"' + this.get('model.keyPeriod') + '"' + '\n') +
      this.showOrHide(this.get('model.keyFwslash'), 'bind / ' + '"' + this.get('model.keyFwslash') + '"' + '\n') +
      this.showOrHide(this.get('model.keyCtrl'), 'bind ctrl ' + '"' + this.get('model.keyCtrl') + '"' + '\n') +
      this.showOrHide(this.get('model.keyAlt'), 'bind alt ' + '"' + this.get('model.keyAlt') + '"' + '\n') +
      this.showOrHide(this.get('model.keySpace'), 'bind space ' + '"' + this.get('model.keySpace') + '"' + '\n') +
      this.showOrHide(this.get('model.keyPause'), 'bind pause ' + '"' + this.get('model.keyPause') + '"' + '\n') +
      this.showOrHide(this.get('model.keyIns'), 'bind ins ' + '"' + this.get('model.keyIns') + '"' + '\n') +
      this.showOrHide(this.get('model.keyHome'), 'bind home ' + '"' + this.get('model.keyHome') + '"' + '\n') +
      this.showOrHide(this.get('model.keyPgup'), 'bind pgup ' + '"' + this.get('model.keyPgup') + '"' + '\n') +
      this.showOrHide(this.get('model.keyDel'), 'bind del ' + '"' + this.get('model.keyDel') + '"' + '\n') +
      this.showOrHide(this.get('model.keyEnd'), 'bind end ' + '"' + this.get('model.keyEnd') + '"' + '\n') +
      this.showOrHide(this.get('model.keyPgdn'), 'bind pgdn ' + '"' + this.get('model.keyPgdn') + '"' + '\n') +
      this.showOrHide(this.get('model.keyUparrow'), 'bind uparrow ' + '"' + this.get('model.keyUparrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyLeftarrow'), 'bind leftarrow ' + '"' + this.get('model.keyLeftarrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyDownarrow'), 'bind downarrow ' + '"' + this.get('model.keyDownarrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyRightarrow'), 'bind rightarrow ' + '"' + this.get('model.keyRightarrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpSlash'), 'bind kp_slash ' + '"' + this.get('model.keyKpSlash') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpMultiply'), 'bind kp_multiply ' + '"' + this.get('model.keyKpMultiply') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpMinus'), 'bind kp_minus ' + '"' + this.get('model.keyKpMinus') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpHome'), 'bind kp_home ' + '"' + this.get('model.keyKpHome') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpUparrow'), 'bind kp_uparrow ' + '"' + this.get('model.keyKpUparrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpPgup'), 'bind kp_pgup ' + '"' + this.get('model.keyKpPgup') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpPlus'), 'bind kp_plus ' + '"' + this.get('model.keyKpPlus') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpLeftarrow'), 'bind kp_leftarrow ' + '"' + this.get('model.keyKpLeftarrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKp5'), 'bind kp_5 ' + '"' + this.get('model.keyKp5') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpRightarrow'), 'bind kp_rightarrow ' + '"' + this.get('model.keyKpRightarrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpEnd'), 'bind kp_end ' + '"' + this.get('model.keyKpEnd') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpDownarrow'), 'bind kp_downarrow ' + '"' + this.get('model.keyKpDownarrow') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpPgdn'), 'bind kp_pgdn ' + '"' + this.get('model.keyKpPgdn') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpEnter'), 'bind kp_enter ' + '"' + this.get('model.keyKpEnter') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpIns'), 'bind kp_ins ' + '"' + this.get('model.keyKpIns') + '"' + '\n') +
      this.showOrHide(this.get('model.keyKpDel'), 'bind kp_del ' + '"' + this.get('model.keyKpDel') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMouse1'), 'bind mouse1 ' + '"' + this.get('model.keyMouse1') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMwheelup'), 'bind mwheelup ' + '"' + this.get('model.keyMwheelup') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMouse3'), 'bind mouse3 ' + '"' + this.get('model.keyMouse3') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMwheeldown'), 'bind mwheeldown ' + '"' + this.get('model.keyMwheeldown') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMouse2'), 'bind mouse2 ' + '"' + this.get('model.keyMouse2') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMouse4'), 'bind mouse4 ' + '"' + this.get('model.keyMouse4') + '"' + '\n') +
      this.showOrHide(this.get('model.keyMouse5'), 'bind mouse5 ' + '"' + this.get('model.keyMouse5') + '"' + '\n') +
      '\n' +
      '// === Crosshair === \n' +
      'cl_crosshairstyle ' + '"' + this.get('model.clCrosshairstyle') + '"' + '\n' +
      'cl_crosshaircolor_r ' + '"' + this.get('model.clCrosshaircolorR') + '"' + '\n' +
      'cl_crosshaircolor_g ' + '"' + this.get('model.clCrosshaircolorG') + '"' + '\n' +
      'cl_crosshaircolor_b ' + '"' + this.get('model.clCrosshaircolorB') + '"' + '\n' +
      'cl_crosshairalpha ' + '"' + this.get('model.clCrosshairalpha') + '"' + '\n' +
      'cl_crosshairusealpha "1" \n' +
      'cl_crosshair_drawoutline ' + '"' + this.boolToNum(this.get('model.clCrosshairDrawoutline')) + '"' + '\n' +
      'cl_crosshair_outlinethickness ' + '"' + this.get('model.clCrosshairOutlinethickness') + '"' + '\n' +
      'cl_crosshairsize ' + '"' + this.get('model.clCrosshairsize') + '"' + '\n' +
      'cl_crosshairthickness ' + '"' + this.get('model.clCrosshairthickness') + '"' + '\n' +
      'cl_crosshairgap ' + '"' + this.get('model.clCrosshairgap') + '"' + '\n' +
      'cl_crosshairdot ' + '"' + this.boolToNum(this.get('model.clCrosshairdot')) + '"' + '\n' +
      '\n' +
      'host_writeconfig';
    return string;
  }.property('model.rate', 'model.clCmdrate', 'model.clUpdaterate', 'model.clInterp', 'model.clInterpRatio', 'model.clLagcompensation',
             'model.volume', 'model.sndMusicvolume', 'model.windowsSpeakerConfig', 'model.sndMixahead', 'model.sndHeadphonePanExponent',
             'model.sndHeadphonePanRadialWeight', 'model.sndLegacySurround', 'model.sndMuteLosefocus', 'model.voiceScale', 'model.voiceEnable',
             'model.lobbyVoiceChatEnabled', 'model.matMonitorgamma', 'model.matQueueMode', 'model.fpsMax', 'model.fpsMaxMenu', 'model.rDynamic',
             'model.rDrawtracersFirstperson', 'model.sensitivity', 'model.zoomSensitivityRatioMouse', 'model.mCustomaccel', 'model.mRawinput',
             'model.conFilterEnable', 'model.conFilterText', 'model.conFilterTextOut', 'model.mmDedicatedSearchMaxping',
             'model.uiSteamOverlayNotificationPosition', 'model.clDownloadfilter', 'model.developer', 'model.conEnable',
             'model.playerNevershowCommunityservermessage', 'model.gameinstructorEnable', 'model.optionDuckMethod', 'model.optionSpeedMethod',
             'model.clForcepreload', 'model.clDisablehtmlmotd', 'model.clAutohelp', 'model.clShowhelp', 'model.clDisablefreezecam',
             'model.clTeammateColorsShow', 'model.clAutowepswitch', 'model.clUseOpensBuyMenu', 'model.closeonbuy', 'model.hudScaling',
             'model.clHudBackgroundAlpha', 'model.clHudColor', 'model.clLoadoutColorweaponnames', 'model.clHudHealthammoStyle',
             'model.clHudPlayercountShowcount', 'model.clHudPlayercountPos', 'model.viewmodelFov', 'model.viewmodelOffsetX', 'model.viewmodelOffsetY',
             'model.viewmodelOffsetZ', 'model.viewmodelPresetpos', 'model.clViewmodelShiftLeftAmt', 'model.clViewmodelShiftRightAmt', 'model.clBobcycle',
             'model.clBobLowerAmt', 'model.clBobamtLat', 'model.clBobamtVert', 'model.hudShowtargetid', 'model.clDrawOnlyDeathnotices', 'model.clRighthand',
             'model.clShowloadout', 'model.clShowpos', 'model.clShowfps', 'model.netGraph', 'model.netGraphproportionalfont', 'model.clRadarScale',
             'model.clRadarIconScaleMin', 'model.clRadarAlwaysCentered', 'model.clRadarRotate', 'model.keyEsc', 'model.keyF1', 'model.keyF2',
             'model.keyF3', 'model.keyF4', 'model.keyF5', 'model.keyF6', 'model.keyF7', 'model.keyF8', 'model.keyF9', 'model.keyF10', 'model.keyF11',
             'model.keyF12', 'model.keyK1', 'model.keyK2', 'model.keyK3', 'model.keyK4', 'model.keyK5', 'model.keyK6', 'model.keyK7', 'model.keyK8',
             'model.keyK9', 'model.keyK0', 'model.keyHyphen', 'model.keyEquals', 'model.keyBackspace', 'model.keyTab', 'model.keyQ', 'model.keyW',
             'model.keyE', 'model.keyR', 'model.keyT', 'model.keyY', 'model.keyU', 'model.keyI', 'model.keyO', 'model.keyP', 'model.keyLbracket',
             'model.keyRbracket', 'model.keyBkslash', 'model.keyCapslock', 'model.keyA', 'model.keyS', 'model.keyD', 'model.keyF', 'model.keyG',
             'model.keyH', 'model.keyJ', 'model.keyK', 'model.keyL', 'model.keySemicolon', 'model.keyApostrophe', 'model.keyEnter', 'model.keyShift',
             'model.keyZ', 'model.keyX', 'model.keyC', 'model.keyV', 'model.keyB', 'model.keyN', 'model.keyM', 'model.keyComma', 'model.keyPeriod',
             'model.keyFwslash', 'model.keyCtrl', 'model.keyAlt', 'model.keySpace', 'model.keyPause', 'model.keyIns', 'model.keyHome', 'model.keyPgup',
             'model.keyDel', 'model.keyEnd', 'model.keyPgdn', 'model.keyUparrow', 'model.keyLeftarrow', 'model.keyDownarrow', 'model.keyRightarrow',
             'model.keyKpSlash', 'model.keyKpMultiply', 'model.keyKpMinus', 'model.keyKpHome', 'model.keyKpUparrow', 'model.keyKpPgup', 'model.keyKpPlus',
             'model.keyKpLeftarrow', 'model.keyKp5', 'model.keyKpRightarrow', 'model.keyKpEnd', 'model.keyKpDownarrow', 'model.keyKpPgdn', 'model.keyKpEnter',
             'model.keyKpIns', 'model.keyKpDel', 'model.keyMouse1', 'model.keyMwheelup', 'model.keyMouse3', 'model.keyMwheeldown', 'model.keyMouse2',
             'model.keyMouse4', 'model.keyMouse5', 'model.clCrosshairstyle', 'model.clCrosshaircolorR', 'model.clCrosshaircolorG', 'model.clCrosshaircolorB',
             'model.clCrosshairalpha', 'model.clCrosshairDrawoutline', 'model.clCrosshairOutlinethickness', 'model.clCrosshairsize', 'model.clCrosshairthickness', 'model.clCrosshairgap',
             'model.clCrosshairdot'),
  boolToNum: function(value) {
    return value ? 1 : 0;
  },
  showOrHide: function(value, string) {
    if (value.length > 0) {
      return string;
    } else {
      return '';
    }
  }
});
