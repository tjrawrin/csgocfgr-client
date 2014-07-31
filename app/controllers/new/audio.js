import Ember from 'ember';

export default Ember.ObjectController.extend({
  speakerOptions: [
    {optionName: 'Default, Automatically Pick Best', id: -1},
    {optionName: 'Headphones', id: 1},
    {optionName: '4 Speakers', id: 3},
    {optionName: '2 Speakers', id: 4},
    {optionName: '5.1 Surround', id: 6},
  ]
});
