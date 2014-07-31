var CMDLookupTable = {
  'rate': {
    'title': 'Rate',
    'description': '<p><strong>Rate</strong> is the <em>maximum</em> bytes per second that the host can receive data.</p><p><strong>Min</strong>: 500, <strong>Max</strong>: 128000<br /><strong>Default</strong>: 80000 <!--<i class="icon-arrows-cw" data-default="80000"></i>--></p>'
  },
  'cl_cmdrate': {
    'title': 'CMD Rate',
    'description': '<p><strong>CMD Rate</strong> is the <em>maximum</em> number of command packets sent to the server per second.</p><p><strong>Min</strong>: 10, <strong>Max</strong>: 128<br /><strong>Default</strong>: 64 <!--<i class="icon-arrows-cw" data-default="64"></i>--></p>'
  },
  'cl_updaterate': {
    'title': 'Update Rate',
    'description': '<p><strong>Update Rate</strong> is the number of packets per second of updates you are requesting from the server.</p><p><strong>Default</strong>: 64</p>'
  },
  'cl_interp': {
    'title': 'Interp',
    'description': '<p><strong>Interp</strong> sets the interpolation amount (bounded on the low side by server interp ratio settings).</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 0.50<br /><strong>Default</strong>: 0.03</p>'
  },
  'cl_interp_ratio': {
    'title': 'Interp Ratio',
    'description': '<p><strong>Interp Ratio</strong> sets the interpolation amount.</p><p>Final amount is (cl_interp_ratio / cl_updaterate)</p><p><strong>Default</strong>: 2.0</p>'
  },
  'cl_lagcompensation': {
    'title': 'Lag Compensation',
    'description': '<p><strong>Lag Compensation</strong> performs server side lag compensation of weapon firing events.</p><p><strong>Default</strong>: (1) On <!--<i class="icon-arrows-cw" data-default="on"></i>--></p>'
  },
  'volume': {
    'title': 'Volume',
    'description': '<p><strong>Volume</strong> sets the volume of sounds in game.</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 1<br /><strong>Default</strong>: 1 <!--<i class="icon-arrows-cw" data-default="1"></i>--></p>'
  },
  'snd_musicvolume': {
    'title': 'Music Volume',
    'description': '<p><strong>Music Volume</strong> sets the volume of music in game.</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 1<br /><strong>Default</strong>: 0.7 <!--<i class="icon-arrows-cw" data-default="0.7"></i>--></p>'
  },
  'windows_speaker_config': {
    'title': 'Windows Speaker Config',
    'description': '<p><strong>Windows Speaker Config</strong> sets the configuration of sound channels.</p><p><strong>Default</strong>: -1</p>'
  },
  'snd_mixahead': {
    'title': 'Sound Mixahead',
    'description': '<p><strong>Sound Mixahead</strong> sets the buffer time to play audio.</p><p><strong>Min</strong>: 0<br /><strong>Default</strong>: 0.1</p>'
  },
  'snd_headphone_pan_exponent': {
    'title': 'Headphone Pan Exponent',
    'description': '<p><strong>Headphone Pan Exponent</strong> specifies the exponent for the pan crossfade from phone to phone if the exp pan law is being used.</p><p><strong>Default</strong>: 2</p>'
  },
  'snd_headphone_pan_radial_weight': {
    'title': 'Headphone Pan Radial Weight',
    'description': '<p><strong>Headphone Pan Radial Weight</strong> <pre>Apply cos(angle) * weight</pre> before pan law.</p><p><strong>Default</strong>: 1</p>'
  },
  'snd_legacy_surround': {
    'title': 'Legacy Surround',
    'description': '<p><strong>Legacy Surround</strong> sometimes helps correct 3D surround issues, enable this only if you are experiencing problems with 3D sound.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'snd_mute_losefocus': {
    'title': 'Mute Lose Focus',
    'description': '<p><strong>Mute Lose Focus</strong> disables sound when the game loses focus.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'voice_scale': {
    'title': 'Voice Scale',
    'description': '<p><strong>Voice Scale</strong> sets the volume of voice chat.</p><p><strong>Default</strong>: 1</p>'
  },
  'voice_enable': {
    'title': 'Enable Voice Chat',
    'description': '<p><strong>Enable Voice Chat</strong> enables voice communcation.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'lobby_voice_chat_enabled': {
    'title': 'Voice Chat In Lobby',
    'description': '<p><strong>Voice Chat In Lobby</strong> enables your microphone in the game lobby.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'mat_monitorgamma': {
    'title': 'Monitor Gamma',
    'description': '<p><strong>Monitor Gamma</strong> sets the gamma of your monitor (typically 2.2 for CRT and 1.7 for LCD).</p><p><strong>Min</strong>: 1.6, <strong>Max</strong>: 2.6<br /><strong>Default</strong>: 2.2</p>'
  },
  'mat_queue_mode': {
    'title': 'Video Processing Queue',
    'description': '<p><strong>Video Processing Queue</strong> is the queue/thread mode the matrial system should use.</p><ul><li>-1: Default</li><li>0: Synchronus single thread</li><li>1: Queued single thread</li><li>2: Queued multithreaded</li></ul><p><strong>Default</strong>: -1</p>'
  },
  'fps_max': {
    'title': 'Max FPS',
    'description': '<p><strong>Max FPS</strong> caps your fps at the specified rate in game.</p><p><strong>Default</strong>: 300</p>'
  },
  'fps_max_menu': {
    'title': 'Max FPS (In Menu)',
    'description': '<p><strong>Max FPS (In Menu)</strong> caps your fps at the specified rate in menus.</p><p><strong>Default</strong>: 120</p>'
  },
  'mat_vsync': {  /* part of video.cfg can't be changed by commands */
    'title': 'Vertical Sync',
    'description': '<p><strong>Vertical Sync</strong> syncs your framerate with your monitors refresh rate.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'r_dynamic': {
    'title': 'Dynamic Shadows',
    'description': '<p><strong>Dynamic Shadows</strong> enables dynamic shadows.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'r_drawtracers_firstperson': {
    'title': 'Draw Tracers In First Person',
    'description': '<p><strong>Draw Tracers In First Person</strong> toggles the visiblity of first person weapon tracers.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'sensitivity': {
    'title': 'Sensitivity',
    'description': '<p><strong>Sensitivity</strong> sets the mouse sensitivity.</p><p><strong>Min</strong>: 0.0001, <strong>Max</strong>: 10000000<br /><strong>Default</strong>: 6.0</p>'
  },
  'zoom_sensitivity_ratio_mouse': {
    'title': 'Zoom Sensitivity',
    'description': '<p><strong>Zoom Sensitivity</strong> is the additional mouse sensitivity scale factor applied when FOV is zoomed in.</p><p><strong>Default</strong>: 1.0</p>'
  },
  'm_customaccel': {
    'title': 'Mouse Acceleration',
    'description': '<p><strong>Mouse Acceleration</strong> sets custom mouse acceleration:</p><ul><li>0: Custom acceleration disabled</li><li>1: <pre>mouse_acceleration = min(m_customaccel_max, pow(raw_mouse_delta, m_customaccel_exponent) * m_customaccel_scale + sensitivity)</pre></li><li>2: Same as 1, but x and y sensitivity are scaled by m_pitch and m_yaw respectively</li><li>3: <pre>mouse_acceleration = pow(raw_mouse_delta, m_customaccel_exponent - 1) * sensitivity</pre></li></ul><p><strong>Default</strong>: 3</p>'
  },
  'm_rawinput': {
    'title': 'Raw Input',
    'description': '<p><strong>Raw Input</strong> uses raw input for mouse input.</p><p><strong>Default</strong>: 1 (On)</p>'
  },
  'con_filter_enable': {
    'title': 'Filter Effect',
    'description': '<p><strong>Filter Effect</strong> filters console output based on the setting of con_filter_text.</p><ul><li>1: Filters completely</li><li>2: Displays filtered text brighter than other text.</li></ul><p><strong>Default</strong>: 0</p>'
  },
  'con_filter_text': {
    'title': 'Filter Setting 1',
    'description': '<p><strong>Filter Setting 1</strong> is the text with which to filter console output. Set con_filter_enable 1 or 2 to activate.</p><p><strong>Example</strong>: <pre>damage</pre></p>'
  },
  'con_filter_text_out': {
    'title': 'Filter Setting 2',
    'description': '<p><strong>Filter Setting 2</strong> is the text with which to filter OUT of console output. Set con_filter_enable 1 or 2 to activate.</p><p><strong>Example</strong>: <pre>player:</pre></p>'
  },
  'mm_dedicated_search_maxping': {
    'title': 'Max Search Ping',
    'description': '<p><strong>Max Search Ping</strong> sets the maximum allowable ping to dedicated servers when searching for games.</p><p><strong>Min</strong>: 50, <strong>Max</strong>: 350<br /><strong>Default</strong>: 150</p>'
  },
  'ui_steam_overlay_notification_position': {
    'title': 'Steam Notifications Position',
    'description': '<p><strong>Steam Notifications Position</strong> sets the position of steam overly notifications.</p><p><strong>Default</strong>: topleft</p>'
  },
  'cl_downloadfilter': {
    'title': 'Download Filter',
    'description': '<p><strong>Download Filter</strong> determines which files can be downloaded from the server.</p><ul><li>All</li><li>None</li><li>Nosounds</li></ul><p><strong>Default</strong>: all</p>'
  },
  'developer': {
    'title': 'Developer',
    'description': '<p><strong>Developer</strong> sets developer message level.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'con_enable': {
    'title': 'Enable Console',
    'description': '<p><strong>Enable Console</strong> allows the console to be activated.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'player_nevershow_communityservermessage': {
    'title': 'Community Server Message',
    'description': '<p><strong>Community Server Message</strong> enable or disable community server message.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'gameinstructor_enable': {
    'title': 'Game Instructor',
    'description': '<p><strong>Game Instructor</strong> displays in game lessons that teach new players.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'option_duck_method': {
    'title': 'Duck Method',
    'description': '<p><strong>Duck Method</strong> switches between hold to duck and toggle duck on/off.</p><ul><li>On: Toggle duck on/off</li><li>Off: Hold to duck</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'option_speed_method': {
    'title': 'Speed Method',
    'description': '<p><strong>Speed Method</strong></p> switches between hold to walk and toggle walk on/off.</p><ul><li>On: Toggle walk on/off</li><li>Off: Hold to walk</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_forcepreload': {
    'title': 'Force Preload',
    'description': '<p><strong>Force Preload</strong> whether or not to force preloading.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_disablehtmlmotd': {
    'title': 'Disable HTML MOTD',
    'description': '<p><strong>Disable HTML MOTD</strong> disables the HTML MOTD message when connecting to servers.</p><p><strong>Default</strong>: 0 (Off)</p>'
  },
  'cl_autohelp': {
    'title': 'Automatic Help',
    'description': '<p><strong>Automatic Help</strong></p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_showhelp': {
    'title': 'Show Help',
    'description': '<p><strong>Show Help</strong> set to 0 to not show on-screen help.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_disablefreezecam': {
    'title': 'Disable Freeze Cam',
    'description': '<p><strong>Disable Freeze Cam</strong> disables freezecam after death.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_teammate_colors_show': {
    'title': 'Show Teammate Colors',
    'description': '<p><strong>Show Teammate Colors</strong> in competitive:</p><ul><li>1: Show teammates as seperate colors in the radar, scoreboard, etc...</li><li>2: Show colors and letters</li></ul><p><strong>Default</strong>: 1</p>'
  },
  'cl_loadout_colorweaponnames': {
    'title': 'Color Weapon Name (HUD)',
    'description': '<p><strong>Color Weapon Name (HUD)</strong> if set to true, the weapon names are colored in the weapon loadout to match their rarity.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_autowepswitch': {
    'title': 'Auto Weapon Switch',
    'description': '<p><strong>Auto Weapon Switch</strong> automatically switch to picked up weapons (if more powerful).</p><p><strong>Default</strong>: (1) On</strong>'
  },
  'cl_use_opens_buy_menu': {
    'title': 'Use Opens Buy Menu',
    'description': '<p><strong>Use Opens Buy Menu</strong> pressing the +use key will open the buy menu if in a buy zone.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'closeonbuy': {
    'title': 'Close on Buy',
    'description': '<p><strong>Close on Buy</strong> closes the buy menu after buying something.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'hud_takesshots': {  /* doesn't work in csgo */
    'title': 'HUD Takes Screenshots',
    'description': '<p><strong>HUD Takes Screenshots</strong> auto-save a scoreboard screenshot at the end of a map.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'hud_scaling': {
    'title': 'HUD Scaling',
    'description': '<p><strong>HUD Scaling</strong> scales the hud elements.</p><p><strong>Min</strong>: 0.5, <strong>Max</strong>: 0.95<br /><strong>Default</strong>: 0.85</p>'
  },
  'cl_hud_background_alpha': {
    'title': 'HUD Background Alpha',
    'description': '<p><strong>HUD Background Alpha</strong> sets the alpha of the background on HUD elements.</p><p><strong>Min</strong>: 0,<strong>Max</strong>: 1<br /><strong>Default</strong>: 0.5</p>'
  },
  'cl_hud_color': {
    'title': 'Hud Color',
    'description': '<p><strong>Hud Color</strong> sets the color of HUD elements.</p><p><strong>Default</strong>: 0</p>'
  },
  'cl_hud_healthammo_style': {
    'title': 'Simple Health and Ammo',
    'description': '<p><strong>Simple Health and Ammo</strong> hides some HUD elements like health/armor bars and firerate in ammo.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_hud_playercount_showcount': {
    'title': 'Show Player Count',
    'description': '<p><strong>Show Player Count</strong> determines how to display players on the HUD.</p><ul><li>On: Show count of living players on team (no avatars)</li><li>Off: Show player avatars</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_hud_playercount_pos': {
    'title': 'Player Count at Bottom',
    'description': '<p><strong>Player Count at Bottom</strong> displays the player count HUD element on the bottom of the screen.</p><ul><li>On: Position at bottom</li><li>Off: Position at top</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'viewmodel_fov': {
    'title': 'Field of View',
    'description': '<p><strong>Field of View</strong></p><p><strong>Default</strong>: 54</p>'
  },
  'viewmodel_offset_x': {
    'title': 'Viewmodel Offset X',
    'description': '<p><strong>Viewmodel Offset X</strong></p><p><strong>Default</strong>: 0</p>'
  },
  'viewmodel_offset_y': {
    'title': 'Viewmodel Offset Y',
    'description': '<p><strong>Viewmodel Offset y</strong></p><p><strong>Default</strong>: 0</p>'
  },
  'viewmodel_offset_z': {
    'title': 'Viewmodel Offset Z',
    'description': '<p><strong>Viewmodel Offset Z</strong></p><p><strong>Default</strong>: 0</p>'
  },
  'viewmodel_presetpos': {
    'title': 'Preset Viewmodel',
    'description': '<p><strong>Preset Viewmodel</strong> selects a pre-configured viewmodel.</p><p><strong>Default</strong>: (1) Desktop</p>'
  },
  'cl_viewmodel_shift_left_amt': {
    'title': 'Shooting Movement Left',
    'description': '<p><strong>Shooting Movement Left</strong> is the amount the viewmodel shifts to the left when shooting accuracy increases.</p><p><strong>Min</strong>: 0.5, <strong>Max</strong>: 2<br /><strong>Default</strong>: 1.5</p>'
  },
  'cl_viewmodel_shift_right_amt': {
    'title': 'Shooting Movement Right',
    'description': '<p><strong>Shooting Movement Right</strong> is the amount the viewmodel shifts to the right when shooting accuracy decreases.</p><p><strong>Min</strong>: 0.25, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.75</p>'
  },
  'cl_bobcycle': {
    'title': 'Bobcycle',
    'description': '<p><strong>Bobcycle</strong> is the frequency at which the viewmodel bobs.</p><p><strong>Min</strong>: 0.1, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.98</p>'
  },
  'cl_bob_lower_amt': {
    'title': 'Bob (Lower Limit)',
    'description': '<p><strong>Bob (Lower Limit)</strong> is the amount the viewmodel lowers when running.</p><p><strong>Min</strong>: 5, <strong>Max</strong>: 30<br /><strong>Default</strong>: 21</p>'
  },
  'cl_bobamt_lat': {
    'title': 'Bob Lateral',
    'description': '<p><strong>Bob Lateral</strong> is the amount the viewmodel moves side to side when running.</p><p><strong>Min</strong>: 0.1, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.4</p>'
  },
  'cl_bobamt_vert': {
    'title': 'Bob Vertical',
    'description': '<p><strong>Bob Vertical</strong> is the amount the viewmodel moves up and down when running.</p><p><strong>Min</strong>: 0.1, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.4</p>'
  },
  'hud_showtargetid': {
    'title': 'Show Target ID',
    'description': '<p><strong>Show Target ID</strong> enables the display of target names.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_draw_only_deathnotices': {
    'title': 'Draw Only Death Notices',
    'description': '<p><strong>Draw Only Death Notices</strong> draws only the crosshair and death notices. (Useful for movie making).</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_righthand': {
    'title': 'Right Handed',
    'description': '<p><strong>Right Handed</strong> enables right-handed viewmodels.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_showloadout': {
    'title': 'Show Loadout',
    'description': '<p><strong>Show Loadout</strong> toggles the display of the current loadout.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_showpos': {
    'title': 'Speed and Detailed Position',
    'description': '<p><strong>Speed and Detailed Position</strong> draws the current position at the top of the screen.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_showfps': {
    'title': 'Show FPS',
    'description': '<p><strong>Show FPS</strong> draws an fps meter.</p><ul><li>0: Disabled</li><li>1: FPS</li><li>2: Smooth</li><li>3: Server</li><li>4: Show &amp; Log to file</li><li>5: Thread and wait times</li></ul><p><strong>Default</strong>: (0) Disabled</p>'
  },
  'net_graph': {
    'title': 'Net Graph',
    'description': '<p><strong>Net Graph</strong> draws the network usage data.</p><ul><li>0: Disabled</li><li>1: Show network data</li><li>2: Show in/out data</li><li>3: Draw data on payload</li></ul><p><strong>Default</strong>: (0) Disabled</p>'
  },
  'net_graphproportionalfont': {
    'title': 'Net Graph Proportional Font',
    'description': '<p><strong>Net Graph Proportional Font</strong> determines whether or not netgraph font is proportional.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_hud_radar_scale': {
    'title': 'Radar Scale (HUD)',
    'description': '<p><strong>Radar Scale (HUD)</strong> sets the scale of the radar HUD element.</p><p><strong>Min</strong>: 0.8, <strong>Max</strong>: 1.3<br /><strong>Default</strong>: 1</p>'
  },
  'cl_radar_scale': {
    'title': 'Radar Scale',
    'description': '<p><strong>Radar Scale</strong> sets the scale of the radar interior display.</p><p><strong>Min</strong>: 0.25, <strong>Max</strong>: 1<br /><strong>Default</strong>: 0.7</p>'
  },
  'cl_radar_icon_scale_min': {
    'title': 'Radar Icon Scale',
    'description': '<p><strong>Radar Icon Scale</strong> sets the minimum icon scale.</p><p><strong>Min</strong>: 0.4, <strong>Max</strong>: 1<br /><strong>Default</strong>: 0.6</p>'
  },
  'cl_radar_always_centered': {
    'title': 'Radar Always Centered',
    'description': '<p><strong>Radar Always Centered</strong> if set to 0, the radar is maximally used. Otherwise the player is always centered, even at map extents.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_radar_rotate': {
    'title': 'Radar Rotate',
    'description': '<p><strong>Radar Rotate</strong> rotates the radar in the direction the player is facing.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_crosshaircolor_r': {
    'title': 'Red',
    'description': '<p><strong>Red</strong> sets the amount of red in the crosshair color.</p><p><strong>Default</strong>: 50</p>'
  },
  'cl_crosshaircolor_g': {
    'title': 'Green',
    'description': '<p><strong>Green</strong> sets the amount of green in the crosshair color.</p><p><strong>Default</strong>: 250</p>'
  },
  'cl_crosshaircolor_b': {
    'title': 'Blue',
    'description': '<p><strong>Blue</strong> sets the amount of blue in the crosshair color.</p><p><strong>Default</strong>: 50</p>'
  },
  'cl_crosshairalpha': {
    'title': 'Alpha',
    'description': '<p><strong>Alpha</strong> sets the transparency of the crosshair.</p><p><strong>Default</strong>: 200</p>'
  },
  'cl_crosshair_drawoutline': {
    'title': 'Draw Outline',
    'description': '<p><strong>Draw Outline</strong> draws a black outline around the crosshair for better visibility.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_crosshair_outlinethickness': {
    'title': 'Outline Thickness',
    'description': '<p><strong>Outline Thickness</strong> sets the thickness of the crosshair outline</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 3<br /><strong>Default</strong>: 1</p>'
  },
  'cl_crosshairsize': {
    'title': 'Size',
    'description': '<p><strong>Size</strong> sets the length of the crosshairs.</p><p><strong>Default</strong>: 5</p>'
  },
  'cl_crosshairthickness': {
    'title': 'Thickness',
    'description': '<p><strong>Thickness</strong> sets the width of the crosshairs.</p><p><strong>Default</strong>: 0.5</p>'
  },
  'cl_crosshairgap': {
    'title': 'Gap',
    'description': '<p><strong>Gap</strong> sets the amount of space between the crosshairs.</p><p><strong>Default</strong>: 1</p>'
  },
  'cl_crosshairdot': {
    'title': 'Dot',
    'description': '<p><strong>Dot</strong> determines whether or not to draw a dot in the center of the crosshair.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_crosshairstyle': {
    'title': 'Crosshair Style',
    'description': '<p><strong>Crosshair Style</strong> sets the animation behavior of the crosshair.<ul><li>Default: Default apperance and animation behavior.</li><li>Default Static: Default appearance with no animation.</li><li>Accurate Split: Accurate recoil/spread feedback with a fixed inner part.</li><li>Accurate Dynamic: Custom appearance with accurate recoil/spread feedback.</li><li>Classic Static: Custom apperance with no animation.</li><li>CS 1.6 Style: Custom apperance with fake recoil (inaccurate feedback).</li></ul></p><p><strong>Min</strong>: 0, <strong>Max</strong>: 5<br /><strong>Default</strong>: (0) Default</p>'
  },

};


