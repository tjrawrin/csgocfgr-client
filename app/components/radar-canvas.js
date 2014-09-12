import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  classNames: ['radar-canvas'],
  width: 276,
  height: 276,
  attributeBindings: ['width', 'height'],
  ctx: null,
  previewBaseSize: 280,
  imageSize: 368,
  startOffset: 25,
  radarIconSize: 20,
  defaultBGPosition: '-12420px',
  previewConfig: {
    '0': {
      'icons': {
        '0': {
          'x': '100',
          'y': '200',
          'color': 'red'
        },
        '1': {
          'x': '30',
          'y': '125',
          'color': 'yellow'
        },
        '2': {
          'x': '210',
          'y': '90',
          'color': 'green'
        },
        '3': {
          'x': '210',
          'y': '210',
          'color': 'blue'
        },
        '4': {
          'x': '50',
          'y': '200',
          'color': 'orange'
        },
        '5': {
          'x': '128',
          'y': '110',
          'color': 'purple'
        }
      }
    }
  },
  didInsertElement: function() {
    this.set('ctx', this.get('element').getContext('2d'));
    this.setPreviewScale();
    this.setRadarScale();
    this.clearCanvas();
    this.draw();
  },
  draw: function() {
    this.clearCanvas();

    var layout = this.previewConfig[0];
    this.drawIcon(layout['icons']['0']['x'], layout['icons']['0']['y'], layout['icons']['0']['color']);
    this.drawIcon(layout['icons']['1']['x'], layout['icons']['1']['y'], layout['icons']['1']['color']);
    this.drawIcon(layout['icons']['2']['x'], layout['icons']['2']['y'], layout['icons']['2']['color']);
    this.drawIcon(layout['icons']['3']['x'], layout['icons']['3']['y'], layout['icons']['3']['color']);
    this.drawIcon(layout['icons']['4']['x'], layout['icons']['4']['y'], layout['icons']['4']['color']);
    this.drawIcon(layout['icons']['5']['x'], layout['icons']['5']['y'], layout['icons']['5']['color']);

  }.observes('data.clHudRadarScale', 'data.clRadarScale', 'data.clRadarIconScaleMin', 'data.clRadarAlwaysCentered',
             'data.clRadarRotate'),
  drawIcon: function(xPos, yPos, color) {
    var basePixels = 7;
    var scaleSteps = (1 - 0.25) * 100;
    var stepSize = (10 / scaleSteps);

    var scaleSize = this.get('data.clRadarScale');
    var scaleOffset = (scaleSize - 0.25) * 100;
    var pixels = scaleOffset * stepSize;
    var diameter = (basePixels + pixels);

    if(diameter > 18) {
      diameter = 18;
    } else if(diameter < (this.get('radarIconSize') * this.get('data.clRadarIconScaleMin'))) {
      diameter = this.get('radarIconSize') * this.get('data.clRadarIconScaleMin');
    }

    var radius = diameter / 2;
    var ctx = this.get('ctx');

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  },
  setPreviewScale: function() {
    var scaleSize = this.get('previewBaseSize') * parseFloat(this.get('data.clHudRadarScale'));
    var $imageContainer = Ember.$('div.radar-image');
    scaleSize = Math.floor(scaleSize + 0.5);

    $imageContainer.css({
      'width': scaleSize,
      'height': scaleSize
    });

    this.$().css({
      'width': scaleSize,
      'height': scaleSize
    });

  }.observes('data.clHudRadarScale', 'data.clRadarScale'),
  setRadarScale: function () {
    var imageSize = Ember.$('div.radar-image').width();
    var scaleValue = Math.floor((this.get('data.clRadarScale') * 100) + 0.5);
    var scaleOffset = Math.floor(parseInt((imageSize * (scaleValue - this.get('startOffset'))) * -1));
    var $imageContainer = Ember.$('div.radar-image');

    $imageContainer.css({
      'background-position-x': scaleOffset
    });

  }.observes('data.clRadarScale', 'data.clHudRadarScale'),
  clearCanvas: function() {
    var ctx = this.get('ctx');
    return ctx.clearRect(0, 0, this.get('width'), this.get('height'));
  }
});
