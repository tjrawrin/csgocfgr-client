import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // update the filename preview input with the selected file name for importing
    updatePreview(event) {
      const fileName = event.target.value.split(/(\\|\/)/g).pop();
      return Ember.$('#file-upload-preview').val(fileName);
    }
  }
});
