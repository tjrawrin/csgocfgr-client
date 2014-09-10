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
      topPosition = 460;
    } else {
      topPosition = 228;
    }

    if (window.scrollY >= topPosition) {
      $container.addClass('fixed-preview');
    } else {
      $container.removeClass('fixed-preview');
    }
  }
});
