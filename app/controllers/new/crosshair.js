import Ember from 'ember';

export default Ember.ObjectController.extend({
  currentImage: 0,
  actions: {
    prev: function() {
      if (this.currentImage <= 0) {
        this.set('currentImage', Object.keys(this.backgroundOptions).length - 1);
        return this.backgroundSwitch();
      } else {
        this.decrementProperty('currentImage');
        return this.backgroundSwitch();
      }
    },
    next: function() {
      if (this.currentImage === Object.keys(this.backgroundOptions).length - 1) {
        this.set('currentImage', 0);
        return this.backgroundSwitch();
      } else {
        this.incrementProperty('currentImage');
        return this.backgroundSwitch();
      }
    }
  },
  backgroundSwitch: function() {
    return Ember.$('div.crosshair-image').css({
      'background': 'url(' + this.backgroundOptions[this.currentImage].url + ')',
      'background-position': this.backgroundOptions[this.currentImage].x + 'px ' + this.backgroundOptions[this.currentImage].y + 'px'
    });
  },
  backgroundOptions: {
    '0': {
      'url': 'assets/images/de_dust2_01.jpg',
      'x': -450,
      'y': -260
    },
    '1': {
      'url': 'assets/images/de_dust2_02.jpg',
      'x': -450,
      'y': -160
    },
    '2': {
      'url': 'assets/images/de_dust2_03.jpg',
      'x': -450,
      'y': -160
    },
    '3': {
      'url': 'assets/images/de_inferno_01.jpg',
      'x': -450,
      'y': -160
    },
    '4': {
      'url': 'assets/images/de_inferno_02.jpg',
      'x': -450,
      'y': -160
    },
    '5': {
      'url': 'assets/images/de_inferno_03.jpg',
      'x': -450,
      'y': -160
    },
    '6': {
      'url': 'assets/images/de_nuke_01.jpg',
      'x': -450,
      'y': -160
    },
    '7': {
      'url': 'assets/images/de_nuke_02.jpg',
      'x': -450,
      'y': -160
    },
    '8': {
      'url': 'assets/images/de_nuke_03.jpg',
      'x': -450,
      'y': -160
    },
    '9': {
      'url': 'assets/images/de_mirage_01.jpg',
      'x': -450,
      'y': -160
    },
    '10': {
      'url': 'assets/images/de_mirage_02.jpg',
      'x': -450,
      'y': -160
    },
    '11': {
      'url': 'assets/images/de_mirage_03.jpg',
      'x': -450,
      'y': -160
    }
  },
  styleOptions: [
    {optionName: '0: Default', id: 0},
    {optionName: '1: Default Static', id: 1},
    {optionName: '2: Accurate Split', id: 2},
    {optionName: '3: Accurate Dynamic', id: 3},
    {optionName: '4: Classic Static', id: 4},
    {optionName: '5: CS 1.6 Style', id: 5}
  ]
});
