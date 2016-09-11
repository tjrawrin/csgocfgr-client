import Ember from 'ember';

export default Ember.Controller.extend({
  /**
  * Array of objects for the custom acceleration options custom select compontent.
  */
  customAccelOptions: [
    {optionName: 'Custom Acceleration Disabled', id: 0},
    {optionName: '1', id: 1},
    {optionName: '2', id: 2},
    {optionName: '3', id: 3}
  ]
});
