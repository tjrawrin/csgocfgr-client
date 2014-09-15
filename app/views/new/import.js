import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.set('controller.inputFile', Ember.$('input[data-upload="file"]')[0]);
    this.set('controller.inputText', Ember.$('textarea[data-upload="text"]')[0]);
  },
  bindEvents: function() {
    this.get('controller.inputFile').on('change', Ember.$.proxy(this.get('controller.doParse'), this));
    this.get('controller.inputText').on('input', Ember.$.proxy(this.get('controller.doParse'), this));
  }.observes('didInsertElement'),
  showHideConfigImport: function() {
    var $importOptions = Ember.$('input#fileImport, input#textImport'),
        $fileRadio = Ember.$('input#fileImport'),
        $configFile = Ember.$('.upload-config-file'),
        $configText = Ember.$('.upload-config-text');

    $importOptions.on('change', function() {
      if ($fileRadio.prop('checked')) {
        $configFile.show();
        $configText.hide();
      } else {
        $configFile.hide();
        $configText.show();
      }
    });
  }.on('didInsertElement')
});
