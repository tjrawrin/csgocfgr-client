import Ember from 'ember';

const defaultValues = {
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
};

export default Ember.Component.extend({
  data: defaultValues,
  hudcolorOptions: [
    {optionName: '0: Default', id: 0},
    {optionName: '1: White', id: 1},
    {optionName: '2: Light Blue', id: 2},
    {optionName: '3: Blue', id: 3},
    {optionName: '4: Purple', id: 4},
    {optionName: '5: Red', id: 5},
    {optionName: '6: Orange', id: 6},
    {optionName: '7: Yellow', id: 7},
    {optionName: '8: Green', id: 8},
    {optionName: '9: Teal', id: 9},
    {optionName: '10: Pink', id: 10}
  ],
  viewmodelOptions: [
    {optionName: '1: Desktop', id: 1},
    {optionName: '2: Couch', id: 2},
    {optionName: '3: Classic', id: 3}
  ],
  showFpsOptions: [
    {optionName: '0: Disabled', id: 0},
    {optionName: '1: FPS', id: 1},
    {optionName: '2: Smooth', id: 2},
    {optionName: '3: Server', id: 3},
    {optionName: '4: Show & Log to File', id: 4},
    {optionName: '5: Thread and Wait Times', id: 5}
  ],
  netGraphOptions: [
    {optionName: '0: Disabled', id: 0},
    {optionName: '1: Show Network Data', id: 1},
    {optionName: '2: Show in/out Data', id: 2},
    {optionName: '3: Draw Data on Payload', id: 3}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
