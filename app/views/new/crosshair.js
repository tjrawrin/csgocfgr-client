import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(window).on('scroll', Ember.$.proxy(this.lockCanvasPosition, this));
  },
  lockCanvasPosition: function() {
    var $container = Ember.$('.crosshair-preview');
    var $settings = Ember.$('#crosshair-settings');

    var topPosition = 0;
    if(Ember.$('.instructions').length) {
      topPosition = 445;
    } else {
      topPosition = 225;
    }

    if(window.scrollY >= topPosition) {
      $container.addClass('fixed-preview');
      $settings.addClass('fixed-settings');
    } else {
      $container.removeClass('fixed-preview');
      $settings.removeClass('fixed-settings');
    }
  }
});
