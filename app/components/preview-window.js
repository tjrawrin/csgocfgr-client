import Ember from 'ember';
import Spinner from 'npm:spin.js';

export default Ember.Component.extend({
  // config string value
  config: '',

  // checks if we are in the create route to determine which buttons to display
  inCreateRoute: Ember.computed(function() {
    const route = this.get('router.currentRouteName');
    if (route === 'create.index') {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    // saves the config to the server and redirects to the show page or errors out
    saveAndDownload() {
      let spinner = new Spinner().spin();
      let $btn = Ember.$('.PreviewWindow-button--save');

      $btn.addClass('PreviewWindow-button--disabled');
      $btn.attr('disabled', 'disabled');
      $btn.append(spinner.el);

      this.get('data').save().then(() => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('PreviewWindow-button--disabled');
        return this.sendAction('redirectToShow', this.get('data.permalink'));
      }, error => {
        Ember.$(spinner.el).remove();
        $btn.removeAttr('disabled');
        $btn.removeClass('PreviewWindow-button--disabled');
        return this.sendAction('redirectToIndex', error);
      });
    },

    // sends action which redirects to the create page with loaded settings
    createEdit(permalink) {
      return this.sendAction('redirectToCreate', permalink);
    }
  }
});
