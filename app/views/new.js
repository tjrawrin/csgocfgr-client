import Ember from 'ember';

export default Ember.View.extend({
  initPlugin: function() {
    var hoverPopup = new HoverPopup();
    hoverPopup.Init();
  }.on('didInsertElement'),
  stickyNavbar: function() {
    var $navbar = Ember.$('div.navbar__inner');

    if (window.scrollY >= 98) {
      if (!$navbar.hasClass('fixed-nav')) {
        $navbar.css({ 'opacity': '0.0' });
        $navbar.animate({ 'opacity': '1.0' }, 'fast');
      }
      $navbar.addClass('fixed-nav');
    } else {
      if ($navbar.hasClass('fixed-nav')) {
        $navbar.css({'opacity': '0.0'});
        $navbar.animate({'opacity': '1.0'}, 'fast');
      }
      $navbar.removeClass('fixed-nav');
    }
  }.on('didInsertElement'),
  hideInstructions: function($container) {
    $container.slideUp('fast', Ember.$.proxy(this.removeInstructions, this, $container));
  },
  removeInstructions: function($container) {
    $container.remove();
  },
  activateMenu: function() {
    var $menu = Ember.$('ul.nav');

    $menu.toggleClass('nav--open');
  },
  collapseMenu: function () {
      var $menu = Ember.$('ul.nav');
      if($menu.hasClass('nav--open')) {
          $menu.removeClass('nav--open');
      }
  },
  bindEvents: function() {
    var $container = Ember.$('.instructions');
    var $menuButton = Ember.$('button.navbar__menu');

    Ember.$(window).on('scroll', Ember.$.proxy(this.stickyNavbar, this));
    $container.on('click', '.instructions--close', Ember.$.proxy(this.hideInstructions, this, $container));
    $menuButton.on('click', Ember.$.proxy(this.activateMenu, this));
    Ember.$('.navbar').on('click', 'a', Ember.$.proxy(this.collapseMenu, this));
  }.on('didInsertElement'),
  willDestroyElement: function() {
    this.$().off('click');
  }
});
