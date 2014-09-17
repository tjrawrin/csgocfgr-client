import Ember from 'ember';

export default Ember.View.extend({
  becomeFocused: function() {
    this.$('.keybind__textarea').focus();
  }.on('didInsertElement'),
  togglePanel: function(event) {
    var $element = Ember.$(event.target);
    var $panelBody = $element.closest('.panel').find('.panel__body');

    $panelBody.slideToggle('fast', Ember.$.proxy(this.toggleIcon, this, $element));
  },
  toggleIcon: function($element) {
    var $icon = $element.find('i');

    if($icon.hasClass('octicon-chevron-down')) {
      $icon.removeClass('octicon-chevron-down').addClass('octicon-chevron-up');
    } else {
      $icon.removeClass('octicon-chevron-up').addClass('octicon-chevron-down');
    }
  },
  bindEvents: function() {
    Ember.$('.panel').on('click', '.panel__header', Ember.$.proxy(this.togglePanel, this));
    var $helpContainer = Ember.$('div.get-help');
    var $helpButton = Ember.$('a.get-help');
    $helpButton.on('click', function() {
      $helpContainer.slideToggle('fast');
    });
  }.on('didInsertElement'),
  willDestroyElement: function() {
    this.$().off('click');
    Ember.$('html').removeClass('modal-open');
  }
});
