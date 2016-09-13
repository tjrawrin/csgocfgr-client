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
    {optionName: 'Default', id: 0},
    {optionName: 'White', id: 1},
    {optionName: 'Light Blue', id: 2},
    {optionName: 'Blue', id: 3},
    {optionName: 'Purple', id: 4},
    {optionName: 'Red', id: 5},
    {optionName: 'Orange', id: 6},
    {optionName: 'Yellow', id: 7},
    {optionName: 'Green', id: 8},
    {optionName: 'Teal', id: 9},
    {optionName: 'Pink', id: 10}
  ],
  viewmodelOptions: [
    {optionName: 'Desktop', id: 1},
    {optionName: 'Couch', id: 2},
    {optionName: 'Classic', id: 3}
  ],
  showFpsOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'FPS', id: 1},
    {optionName: 'Smooth', id: 2},
    {optionName: 'Server', id: 3},
    {optionName: 'Show & Log to File', id: 4},
    {optionName: 'Thread and Wait Times', id: 5}
  ],
  netGraphOptions: [
    {optionName: 'Disabled', id: 0},
    {optionName: 'Show Network Data', id: 1},
    {optionName: 'Show in/out Data', id: 2},
    {optionName: 'Draw Data on Payload', id: 3}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
