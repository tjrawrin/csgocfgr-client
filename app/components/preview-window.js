import Ember from 'ember';
import Spinner from 'npm:spin.js';

export default Ember.Component.extend({
  config: '',

  inCreateRoute: Ember.computed(function() {
    const route = this.get('router.currentRouteName');
    if (route === 'create') {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    download() {
      const outputText = this.get('config');
      const blob = new Blob([outputText], { type: 'text/plain' });
      saveAs(blob, 'autoexec.cfg');
    },

    saveAndDownload() {
      let spinner = new Spinner().spin();
      let $btn = Ember.$('.PreviewWindow-button--save');

      $btn.addClass('PreviewWindow-button--disabled');
      $btn.attr('disabled', 'disabled');
      $btn.append(spinner.el);

      setTimeout(() => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('PreviewWindow-button--disabled');
      }, 6000);

      this.get('data').save().then(data => {
        this.transitionToRoute('show', data).then(() => {
            return this.sendAction('download');
        });
      });
    },

    createEdit(data) {
      this.transitionTo('create', {queryParams: {slug: data}});
    }
  }
});
