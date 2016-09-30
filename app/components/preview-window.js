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

      this.get('data').save().then(data => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('PreviewWindow-button--disabled');
        return this.send('redirectToShow', this.get('data.slug'));
      }, error => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('PreviewWindow-button--disabled');
        return this.send('redirectToIndex', error);
      });
    },

    createEdit(data) {
      this.transitionTo('create', {queryParams: {slug: data}});
    }
  }
});
