import Ember from 'ember';

export default Ember.Component.extend({
  canvasWidth: null,

  canvasHeight: null,

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

  styleOptions: [
    {optionName: 'Default Apperance and Animation Behavior', id: 0},
    {optionName: 'Default Appearance With No Animation', id: 1},
    {optionName: 'Accurate Recoil/Spread Feedback With a Fixed Inner Part', id: 2},
    {optionName: 'Custom Appearance With Accurate Recoil/Spread Feedback', id: 3},
    {optionName: 'Custom Apperance With No Animation', id: 4},
    {optionName: 'Custom Apperance With Fake Recoil (Inaccurate Feedback)', id: 5}
  ],

  isOpen: false,

  currentImage: 0,

  didInsertElement() {
    Ember.$(`#crosshair-image-0`).addClass('CrosshairPreview-image--active');
  },

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

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

    imageSwitch(oldImage, newImage) {
      Ember.$(`#crosshair-image-${oldImage}`).removeClass('CrosshairPreview-image--active');
      Ember.$(`#crosshair-image-${newImage}`).addClass('CrosshairPreview-image--active');
    },

    updateValue(command, event) {
      this.set(`data.${command}`, event.target.value);
    }
  }
});
