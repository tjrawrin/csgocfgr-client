import Ember from 'ember';

export default Ember.Component.extend({
  // list of preview images to test the crosshair on
  previewImages: [
    '/assets/images/de_dust2_01.jpg',
    '/assets/images/de_dust2_02.jpg',
    '/assets/images/de_dust2_03.jpg',
    '/assets/images/de_inferno_01.jpg',
    '/assets/images/de_inferno_02.jpg',
    '/assets/images/de_inferno_03.jpg',
    '/assets/images/de_mirage_01.jpg',
    '/assets/images/de_mirage_02.jpg',
    '/assets/images/de_mirage_03.jpg',
    '/assets/images/de_nuke_01.jpg',
    '/assets/images/de_nuke_02.jpg',
    '/assets/images/de_nuke_03.jpg'
  ],

  // preview canvas value
  $previewCanvas: null,

  // value for current previe image
  currentImage: 0,

  // value for center of the canvas value
  center: null,

  // value for crosshair length value
  crosshairLength: null,

  // value for crosshair width value
  crosshairWidth: null,

  // value for crosshair gap value
  crosshairGap: null,

  // value for canvas context value
  canvasCtx: null,

  // max crosshair alpha value
  maxAlphaValue: 255,

  actions: {
    // action for moving to the previous preview image
    prevImage() {
      const currentImage = this.currentImage;
      if (currentImage <= 0) {
        this.set('currentImage', this.previewImages.length - 1);
        return this.actions.imageSwitch(currentImage, this.currentImage);
      } else {
        this.decrementProperty('currentImage');
        return this.actions.imageSwitch(currentImage, this.currentImage);
      }
    },

    // action for moving to the next preview image
    nextImage() {
      const currentImage = this.currentImage;
      if (currentImage === this.previewImages.length - 1) {
        this.set('currentImage', 0);
        return this.actions.imageSwitch(currentImage, this.currentImage);
      } else {
        this.incrementProperty('currentImage');
        return this.actions.imageSwitch(currentImage, this.currentImage);
      }
    },

    // action for switching classes on which image is shown
    imageSwitch(oldImage, newImage) {
      Ember.$(`#crosshair-image-${oldImage}`).removeClass('CrosshairPreview-image--active');
      Ember.$(`#crosshair-image-${newImage}`).addClass('CrosshairPreview-image--active');
    }
  },

  // executes functions and sets variables when the component is inserted into the dom
  didInsertElement() {
    Ember.$(`#crosshair-image-0`).addClass('CrosshairPreview-image--active');
    this.set('$previewCanvas', Ember.$('.CrosshairPreview-canvas'));
    const width = this.get('$previewCanvas').width();
    const height = this.get('$previewCanvas').height();
    this.set('canvasCtx', this.get('$previewCanvas')[0].getContext('2d'));
    this.set('center', {'x': (width / 2), 'y': (height / 2)});
    this.bindEvents();
    this.clearCanvas();
    this.draw();
  },

  // method for drawing the crosshair on the canvas
  draw: function() {
    this.clearCanvas();
    this.calculateSize();
    const ctx = this.get('canvasCtx');

    ctx.imageSmoothingEnabled = false;
    const crosshairColor = '#' + this.convertToHex(this.get('data.clCrosshaircolorR')) + '' + this.convertToHex(this.get('data.clCrosshaircolorG')) +'' + this.convertToHex(this.get('data.clCrosshaircolorB'));
    ctx.fillStyle = crosshairColor;
    ctx.globalAlpha = this.get('data.clCrosshairalpha') / this.get('maxAlphaValue');

    let translate = 0;
    translate = (this.get('crosshairWidth') % 2) / 2;
    ctx.translate(translate, translate);

    const center = this.get('center');
    const crosshairWidth = this.get('crosshairWidth');
    const crosshairLength = this.get('crosshairLength');
    const crosshairGap = this.get('crosshairGap');
    const outlineThickness = this.get('data.clCrosshairOutlinethickness');
    const strokeTranslate = (crosshairWidth / 2) - (Math.floor(crosshairWidth / 2));

    if (this.get('data.clCrosshairDrawoutline')) {
      ctx.fillStyle = '#000000';
      ctx.lineWidth = this.get('data.clCrosshairOutlinethickness');

      ctx.translate(-translate, -translate);
      ctx.translate(strokeTranslate, strokeTranslate);

      ctx.fillRect((center.x + ((crosshairWidth / 2) + crosshairGap)) - outlineThickness, (center.y - (crosshairWidth / 2)) - outlineThickness, crosshairLength + (outlineThickness * 2), crosshairWidth + (outlineThickness * 2));
      ctx.fillRect((center.x - ((crosshairLength + (crosshairWidth / 2)) + crosshairGap)) - outlineThickness, (center.y - (crosshairWidth / 2)) - outlineThickness, crosshairLength + (outlineThickness * 2), crosshairWidth + (outlineThickness * 2));
      ctx.fillRect((center.x - (crosshairWidth / 2)) - outlineThickness, (center.y - ((crosshairLength + (crosshairWidth / 2) + crosshairGap))) - outlineThickness, crosshairWidth + (outlineThickness * 2), crosshairLength + (outlineThickness * 2));
      ctx.fillRect((center.x - (crosshairWidth / 2)) - outlineThickness, (center.y + ((crosshairWidth / 2) + crosshairGap)) - outlineThickness, crosshairWidth + (outlineThickness * 2), crosshairLength + (outlineThickness * 2));

      ctx.translate(-strokeTranslate, -strokeTranslate);
      ctx.translate(translate, translate);
    }

    ctx.fillStyle = crosshairColor;
    ctx.fillRect(center.x + ((crosshairWidth / 2) + crosshairGap), center.y - (crosshairWidth / 2), crosshairLength, crosshairWidth);
    ctx.fillRect(center.x - ((crosshairLength + (crosshairWidth / 2)) + crosshairGap), center.y - (crosshairWidth / 2), crosshairLength, crosshairWidth);
    ctx.fillRect(center.x - (crosshairWidth / 2), center.y - ((crosshairLength + (crosshairWidth / 2)) + crosshairGap), crosshairWidth, crosshairLength);
    ctx.fillRect(center.x - (crosshairWidth / 2), center.y + ((crosshairWidth / 2) + crosshairGap), crosshairWidth, crosshairLength);

    if (this.get('data.clCrosshairdot')) {
      const width = crosshairWidth; //2;
      const height = crosshairWidth; //2;

      if (this.get('data.clCrosshairDrawoutline')) {
        ctx.fillStyle = '#000000';
        ctx.translate(-translate, -translate);
        ctx.translate(strokeTranslate, strokeTranslate);
        ctx.fillRect( (center.x - (crosshairWidth / 2)) - outlineThickness, (center.y - (crosshairWidth / 2)) - outlineThickness, crosshairWidth + (outlineThickness * 2), crosshairWidth + (outlineThickness * 2));
        ctx.translate(-strokeTranslate, -strokeTranslate);
        ctx.translate(translate, translate);
      }

      ctx.fillStyle = crosshairColor;
      ctx.fillRect(center.x - (width / 2), center.y - (height / 2), width, height);
    }

    ctx.translate(-translate, -translate);

  }.observes('data.{clCrosshaircolorR,clCrosshaircolorG,clCrosshaircolorB,clCrosshairalpha,clCrosshairthickness,clCrosshairDrawoutline,clCrosshairOutlinethickness,clCrosshairsize,clCrosshairgap,clCrosshairdot}'),

  // converts the RGB number into HEX for setting the crosshair color
  convertToHex(value) {
    return ('0' + parseInt(value).toString(16)).slice(-2);
  },

  // detects when the cursor is inside of the canvas and updates the draw location of the crosshair
  updateCrosshairPosition(event) {
    const offset = this.get('$previewCanvas').offset();
    const x = parseInt(event.pageX - offset.left + 0.5);
    const y = parseInt(event.pageY - offset.top + 0.5);
    this.set('center', {'x': x, 'y': y });
    this.draw();
  },

  // method for calculating the size of the crosshair
  calculateSize() {
    this.set('crosshairLength', parseInt(this.get('data.clCrosshairsize') * 2));
    this.set('crosshairWidth', parseInt(this.get('data.clCrosshairthickness') * 2));
    this.set('crosshairGap', Math.ceil(parseInt(this.get('data.clCrosshairgap')) + 4));

    if (parseInt(this.get('data.clCrosshairsize')) > 2) {
      this.set('crosshairLength', this.get('crosshairLength') + 1);
    }
  },

  // method for clearing the canvas drawing
  clearCanvas() {
    const width = this.get('$previewCanvas').width();
    const height = this.get('$previewCanvas').height();
    return this.get('canvasCtx').clearRect(0, 0, width, height);
  },

  // method of toggling the interactive preview when clicking into the canvas
  toggleInteractivePreview() {
    this.interactivePreview = !this.interactivePreview;
    const $canvas = this.get('$previewCanvas');
    if (this.get('interactivePreview')) {
      $canvas.on('mousemove', Ember.$.proxy(this.updateCrosshairPosition, this));
      $canvas.css( { 'cursor': 'none' } );
    } else {
      $canvas.off('mousemove');
      $canvas.css( { 'cursor': 'default' } );
    }
  },

  // binds events that map happen on the page
  bindEvents() {
    this.get('$previewCanvas').on('click', Ember.$.proxy(this.toggleInteractivePreview, this));
  }
});
