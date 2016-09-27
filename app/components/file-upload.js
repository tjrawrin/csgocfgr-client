import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updatePreview(event) {
      const fileName = event.target.value.split(/(\\|\/)/g).pop();
      return Ember.$('#file-upload-preview').val(fileName);
    }
  }
});
