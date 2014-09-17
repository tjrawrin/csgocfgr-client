import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['customClassName'],
  selectedFileName: null,
  customNoFile: null,
  dataUploadName: function() {
    return this.get('dataUpload');
  }.property(),
  customClassName: function() {
    return this.get('customClass');
  }.property(),
  setSelectedFileName: function() {
    var $input = Ember.$('.file-upload__input');
    var noFile = this.get('customNoFile');
    var self = this;

    this.set('selectedFileName', noFile);

    $input.on('change', function() {
      var fileName = Ember.$(this).val().replace(/C:\\fakepath\\/i, '');

      if (fileName.length === 0) {
        return self.set('selectedFileName', noFile);
      } else {
        return self.set('selectedFileName', fileName);
      }
    });
  }.observes('customNoFile').on('didInsertElement')
});
