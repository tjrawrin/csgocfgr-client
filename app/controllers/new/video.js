import Ember from 'ember';

export default Ember.ObjectController.extend({
  queueModeOptions: [
    {optionName: 'Default', id: -1},
    {optionName: 'Synchronus Single Thread', id: 0},
    {optionName: 'Queued Single Thread', id: 1},
    {optionName: 'Queued Multithreaded', id: 2},
  ]
});
