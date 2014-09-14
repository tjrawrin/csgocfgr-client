import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['customClassName'],
  selectedFileName: 'No file selected...',
  dataUploadName: function() {
    return this.get('dataUpload');
  }.property(),
  customClassName: function() {
    return this.get('customClass');
  }.property(),
  setSelectedFileName: function() {
    var $input = Ember.$('.file-upload__input');
    var self = this;

    $input.on('change', function() {
      var fileName = Ember.$(this).val().replace(/C:\\fakepath\\/i, '');

      if (fileName.length === 0) {
        return self.set('selectedFileName', 'No file selected...');
      } else {
        return self.set('selectedFileName', fileName);
      }
    });
  }.on('didInsertElement'),
});
