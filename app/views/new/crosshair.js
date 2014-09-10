import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.bindEvents();
    this.setCanvasWidth();
  },
  lockCanvasPosition: function() {
    var $container = Ember.$('.crosshair-preview');
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
  },
  setCanvasWidth: function() {
    var $window = Ember.$(window);
    var $previewWindow = Ember.$('.crosshair-preview');

    function checkWidth() {
      var windowSize = $window.width();
      if (windowSize < 1024) {
        $previewWindow.addClass('mobile-preview');
      } else {
        $previewWindow.removeClass('mobile-preview');
      }
    }

    checkWidth();
  },
  expandPreviewWindow: function() {
    var $previewWindow = Ember.$('.crosshair-preview');

    $previewWindow.animate(
    {
      'position': 'absolute',
      'max-width': '950px'
    },
    400);
  },
  shrinkPreviewWindow: function() {
    var $previewWindow = Ember.$('.crosshair-preview');

    $previewWindow.animate(
    {
      'max-width': '560px'
    },
    400);
  },
  bindEvents: function() {
    Ember.$(window).on('scroll', Ember.$.proxy(this.lockCanvasPosition, this));
    Ember.$(window).on('resize', Ember.$.proxy(this.setCanvasWidth, this));
    Ember.$('.crosshair-preview').on('mouseenter', Ember.$.proxy(this.expandPreviewWindow, this));
    Ember.$('.crosshair-preview').on('mouseleave', Ember.$.proxy(this.shrinkPreviewWindow, this));
  }
});
