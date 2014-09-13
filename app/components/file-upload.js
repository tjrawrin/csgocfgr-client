import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['customClassName'],
  selectedFileName: 'No file selected...',
  customClassName: function() {
    return this.get('customClass');
  }.property(),
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
