import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.bindEvents();
    this.setCanvasWidth();
  },
  lockCanvasPosition: function() {
    var $container = Ember.$('.crosshair-preview');
    var $instructions = Ember.$('.instructions');
    var $section = Ember.$('#crosshair');
    var topPosition = 0;

    if ($section.length) {
      if ($instructions.length) {
        if ($section.position().top > 902) {
          topPosition = 932;
        } else {
          topPosition = 742;
        }
      } else {
        if ($section.position().top > 668) {
          topPosition = 694;
        } else {
          topPosition = 510;
        }
      }
    }

    if (window.scrollY >= topPosition) {
      $container.addClass('fixed-preview');
    } else {
      $container.removeClass('fixed-preview');
    }
  }.on('didInsertElement'),
  setCanvasWidth: function() {
    var $window = Ember.$(window);
    var $previewWindow = Ember.$('.crosshair-preview');

    function checkWidth() {
      var windowSize = $window.width();
      if (windowSize < 1009) {
        $previewWindow.addClass('mobile-preview');
      } else {
        $previewWindow.removeClass('mobile-preview');
      }
    }

    checkWidth();
  },
  expandPreviewWindow: function() {
    var $previewWindow = Ember.$('.crosshair-preview');

    $previewWindow.stop();
    $previewWindow.clearQueue();
    $previewWindow.animate(
    {
      'position': 'absolute',
      'max-width': '950px'
    },
    400);
  },
  shrinkPreviewWindow: function() {
    var $previewWindow = Ember.$('.crosshair-preview');

    $previewWindow.stop();
    $previewWindow.clearQueue();
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
