import Ember from 'ember';

export default Ember.View.extend({
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
