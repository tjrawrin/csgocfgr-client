import Ember from 'ember';

export default Ember.ObjectController.extend({
  parseConfig: function(parsedConfig) {
    var $fileRadio = Ember.$('input#fileImport').prop('checked'),
        $textRadio = Ember.$('input#textImport').prop('checked');

    console.log(parsedConfig);

    if ($fileRadio) {
      return this.send('parseFileConfig');
    }

    if ($textRadio) {
      return this.send('parseTextConfig');
    }
  }
});
