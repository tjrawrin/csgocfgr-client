import Ember from 'ember';

export default Ember.Controller.extend({
  /**
  * Define some starting properties.
  */
  noFileName: 'No file selected...',
  config: [],
  actions: {
    /**
    * parseConfig - An action that detects which import field is active
    * and sends the appropriate action to the new route.
    */
    parseConfig: function() {
      var $fileRadio = Ember.$('input#fileImport').prop('checked');
      var $textRadio = Ember.$('input#textImport').prop('checked');
      var config = this.get('config');

      if ($fileRadio) {
        if (this.get('config').length > 0) {
          return this.send('parseFileConfig', config);
        } else {
          this.simpleFlashMessage('No file selected for import.', 'error');
          return false;
        }

      }

      if ($textRadio) {
        if (this.get('config').length > 0) {
          return this.send('parseTextConfig', config);
        } else {
          this.simpleFlashMessage('Text input field empty.', 'error');
          return false;
        }

      }
    }
  }
});
