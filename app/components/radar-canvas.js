import Ember from 'ember';

export default Ember.Component.extend({
  // value of the preview image
  $previewImage: null,

  // value of the canvas
  $previewCanvas: null,

  // canvas context
  canvasCtx: null,

  // base size of the image preview
  previewBaseSize: 276,

  // starting offset for adjusting the scale of the radar
  startOffset: 25,

  // radar icon size
  radarIconSize: 20,

  // settings for random player dots on the radar
  previewConfig: {
    '0': {
      'icons': {
        '0': {'x': '100', 'y': '200', 'color': 'red'},
        '1': {'x': '30', 'y': '125', 'color': 'yellow'},
        '2': {'x': '210', 'y': '90','color': 'green'},
        '3': {'x': '210', 'y': '210', 'color': 'blue'},
        '4': {'x': '50', 'y': '200', 'color': 'orange'},
        '5': {'x': '128', 'y': '110', 'color': 'purple'}
      }
    }
  },

  // executes functions and sets variables when the component is inserted into the dom
  didInsertElement() {
    this.set('$previewImage', Ember.$('.RadarPreview-image'));
    this.set('$previewCanvas', Ember.$('.RadarPreview-canvas'));
    this.set('canvasCtx', this.get('$previewCanvas')[0].getContext('2d'));
    this.previewScale();
    this.clearCanvas();
    this.draw();
  },

  // adjusts the preview scale of the radar
  previewScale: function() {
    const scaleSize = Math.floor(this.get('previewBaseSize') * this.get('data.clHudRadarScale'));
    const scaleValue = this.get('data.clRadarScale') * 100;
    const scaleOffset = Math.floor(scaleSize * (scaleValue - 25) * -1);

    this.get('$previewImage').css({
      'background-position-x': scaleOffset,
      'height': scaleSize,
      'width': scaleSize
    });

    this.get('$previewCanvas').css({
      'height': scaleSize,
      'width': scaleSize
    });
  }.observes('data.{clHudRadarScale,clRadarScale}'),

  // draws the random player dots on the canvas
  draw: function() {
    this.clearCanvas();

    const layout = this.get('previewConfig')[0];
    this.drawIcon(layout['icons']['0']['x'], layout['icons']['0']['y'], layout['icons']['0']['color']);
    this.drawIcon(layout['icons']['1']['x'], layout['icons']['1']['y'], layout['icons']['1']['color']);
    this.drawIcon(layout['icons']['2']['x'], layout['icons']['2']['y'], layout['icons']['2']['color']);
    this.drawIcon(layout['icons']['3']['x'], layout['icons']['3']['y'], layout['icons']['3']['color']);
    this.drawIcon(layout['icons']['4']['x'], layout['icons']['4']['y'], layout['icons']['4']['color']);
    this.drawIcon(layout['icons']['5']['x'], layout['icons']['5']['y'], layout['icons']['5']['color']);

  }.observes('data.{clHudRadarScale,clRadarScale,clRadarIconScaleMin,clRadarAlwaysCentered,clRadarRotate}'),

  // creates the random player dots
  drawIcon(xPos, yPos, color) {
    const basePixels = 7;
    const scaleSteps = (1 - 0.25) * 100;
    const stepSize = (10 / scaleSteps);

    const scaleSize = this.get('data.clRadarScale');
    const scaleOffset = (scaleSize - 0.25) * 100;
    const pixels = scaleOffset * stepSize;
    let diameter = (basePixels + pixels);

    if (diameter > 18) {
      diameter = 18;
    } else if (diameter < (this.get('radarIconSize') * this.get('data.clRadarIconScaleMin'))) {
      diameter = this.get('radarIconSize') * this.get('data.clRadarIconScaleMin');
    }

    const radius = diameter / 2;
    const ctx = this.get('canvasCtx');

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  },

  // method for clearing the canvas drawing
  clearCanvas() {
    const width = this.get('$previewCanvas').width();
    const height = this.get('$previewCanvas').height();
    return this.get('canvasCtx').clearRect(0, 0, width, height);
  }
});
