import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['dataCommand:data-command'],
  classNameBindings: ['customClassName'],
  selectedOptionName: null,
  didInsertElement: function() {
    var selected = this.get('data');
    var $menu = this.$('.dropdown-menu');
    var name = $menu.find('li[rel=' + selected + ']').text();
    this.set('selectedOptionName', name);
    $menu.find('li[rel=' + selected + ']').addClass('selected');
  },
  customClassName: function() {
    return this.get('customClass');
  }.property(),
  dataCommand: function() {
    return this.get('dataCommand').property();
  },
  actions: {
    toggleSelect: function() {
      var $parent = this.$('div.select');
      var isActive = $parent.hasClass('open');
      this.send('closeMenus');
      Ember.$('div.select').removeClass('open');
      if (!isActive) {
        $parent.toggleClass('open');
      }
    },
    select: function(event) {
      var $menu = this.$('.dropdown-menu');
      $menu.find('li.selected').removeClass('selected');
      this.set('data', event.id);
      this.set('selectedOptionName', event.optionName);
      var selected = this.get('data');
      $menu.find('li[rel=' + selected + ']').addClass('selected');
      this.send('toggleSelect');
    },
    closeMenus: function() {
      Ember.$(document).on('click', function(event) {
        if (!Ember.$(event.target).is('button')) {
          Ember.$('div.select').removeClass('open');
        }
      });
    }
  }
});
