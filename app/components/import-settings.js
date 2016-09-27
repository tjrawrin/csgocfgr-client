import Ember from 'ember';

export default Ember.Component.extend({
  fileHidden: false,

  textHidden: true,

  actions: {
    fileImport() {
      this.setProperties({ fileHidden: false, textHidden: true });

      const $textEl = Ember.$('#import-text');

      $textEl.val('');
    },

    textImport() {
      this.setProperties({ fileHidden: true, textHidden: false });

      const $fileEl = Ember.$('#import-file');
      const $previewEl = Ember.$('#file-upload-preview');

      $previewEl.val('');
      $fileEl.wrap('<form>').closest('form').get(0).reset();
      $fileEl.unwrap();
    },

    parseConfig() {

    }
  }
});
