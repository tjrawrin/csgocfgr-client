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
    {optionName: '0: Default', id: 0},
    {optionName: '1: Default Static', id: 1},
    {optionName: '2: Accurate Split', id: 2},
    {optionName: '3: Accurate Dynamic', id: 3},
    {optionName: '4: Classic Static', id: 4},
    {optionName: '5: CS 1.6 Style', id: 5}
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
