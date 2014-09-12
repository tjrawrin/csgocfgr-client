import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['dataCommand:data-command'],
  selectedOptionName: null,
  didInsertElement: function() {
    var selected = this.get('data');
    var $menu = this.$('.dropdown-menu');
    var name = $menu.find('li[rel=' + selected + ']').text();
    this.set('selectedOptionName', name);
    $menu.find('li[rel=' + selected + ']').addClass('selected');
  },
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
  },
  reset: function(event) {
    var $menu = this.$('.dropdown-menu');
    var selected = this.get('data');
    var options = this.get('options');

    function getIndex(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
    }
    this.set('selectedOptionName', options[getIndex(options, 'id', selected)].optionName);

    $menu.find('li.selected').removeClass('selected');
    $menu.find('li[rel=' + selected + ']').addClass('selected');
  }.observes('data')
});
