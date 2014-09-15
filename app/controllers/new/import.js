import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    parseConfig: function() {
      var $fileRadio = Ember.$('input#fileImport').prop('checked'),
          $textRadio = Ember.$('input#textImport').prop('checked');

      if ($fileRadio) {
        return this.send('parseFileConfig');
      }

      if ($textRadio) {
        return this.send('parseTextConfig');
      }
    }
  }
});
