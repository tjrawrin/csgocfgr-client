import Ember from 'ember';

const defaultValues = {
  matMonitorgamma: 2.2,
  matQueueMode: -1,
  fpsMax: 300,
  fpsMaxMenu: 120,
  rDynamic: true,
  rDrawtracersFirstperson: true,
};

export default Ember.Component.extend({
  data: defaultValues,
  queueModeOptions: [
    {optionName: '-1: Default', id: -1},
    {optionName: '0: Synchronus Single Thread', id: 0},
    {optionName: '1: Queued Single Thread', id: 1},
    {optionName: '2: Queued Multithreaded', id: 2},
  ],
  isOpen: false,
  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    }
  }
});
