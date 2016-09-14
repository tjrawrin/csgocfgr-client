import Ember from 'ember';

const defaultValues = {
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
  clCrosshairdot: true,
};

export default Ember.Component.extend({
  data: defaultValues,
  styleOptions: [
    {optionName: '0: Default Apperance and Animation Behavior', id: 0},
    {optionName: '1: Default Appearance With No Animation', id: 1},
    {optionName: '2: Accurate Recoil/Spread Feedback With a Fixed Inner Part', id: 2},
    {optionName: '3: Custom Appearance With Accurate Recoil/Spread Feedback', id: 3},
    {optionName: '4: Custom Apperance With No Animation', id: 4},
    {optionName: '5: Custom Apperance With Fake Recoil (Inaccurate Feedback)', id: 5}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
