// import Ember from 'ember';
//
// export default Ember.View.extend({
//   didInsertElement: function() {
//     Ember.$('.keyboard__key').on('click', function() {
//       var text = Ember.$(this).html().toUpperCase();
//       setTimeout(function() {
//         Ember.$('.keybind-modal__header--name').append(text);
//       }, 1);
//     });
//   },
//   willDestroyElement: function() {
//     this.$().off('click');
//     Ember.$('html').removeClass('modal-open');
//   }
// });
