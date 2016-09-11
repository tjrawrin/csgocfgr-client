import Ember from 'ember';

export default Ember.Controller.extend({
  /**
  * Array of objects for the queue mode options custom select compontent.
  */
  queueModeOptions: [
    {optionName: 'Default', id: -1},
    {optionName: 'Synchronus Single Thread', id: 0},
    {optionName: 'Queued Single Thread', id: 1},
    {optionName: 'Queued Multithreaded', id: 2},
  ]
});
