import Ember from 'ember';

export default Ember.Component.extend({
  selectedFileName: 'No file selected...',
  setSelectedFileName: function() {
    var $input = Ember.$('.file-upload__input');
    var fileName;
    var self = this;

    $input.on('change', function() {
      fileName = Ember.$(this).val().replace(/C:\\fakepath\\/i, '');

      return self.set('selectedFileName', fileName);
    });
  }.on('didInsertElement')
});
