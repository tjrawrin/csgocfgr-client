import Ember from 'ember';

const defaultValues = {
  clCrosshairstyle: 0,
  clCrosshaircolorR: 50,
  clCrosshaircolorG: 250,
  clCrosshaircolorB: 50,
  clCrosshairalpha: 200,
  clCrosshairDrawoutline: true,
  clCrosshairOutlinethickness: 1,
  clCrosshairsize: 5,
  clCrosshairthickness: 0.5,
  clCrosshairgap: 1,
  clCrosshairdot: true,
};

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$(`#crosshair-image-0`).addClass('CrosshairPreview-image--active');
  },
  canvasWidth: null,
  canvasHeight: null,
  data: defaultValues,
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
    {optionName: '0: Default Apperance and Animation Behavior', id: 0},
    {optionName: '1: Default Appearance With No Animation', id: 1},
    {optionName: '2: Accurate Recoil/Spread Feedback With a Fixed Inner Part', id: 2},
    {optionName: '3: Custom Appearance With Accurate Recoil/Spread Feedback', id: 3},
    {optionName: '4: Custom Apperance With No Animation', id: 4},
    {optionName: '5: Custom Apperance With Fake Recoil (Inaccurate Feedback)', id: 5}
  ],
  isOpen: false,
  currentImage: 0,
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
    }
  }
});
