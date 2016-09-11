// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   controllerName: 'show.index',
//   model: function(params) {
//     return this.store.findById('cfg', params.cfg_id);
//   },
//   actions: {
//     error: function(error) {
//       if (error.status === 404) {
//         this.simpleFlashMessage('The config you requested does not exist or could not be found.', 'error');
//         this.transitionTo('new');
//       } else {
//         this.simpleFlashMessage('Oh noes! Something seriously went wrong. We\'re working on it!', 'error');
//         this.transitionTo('new');
//       }
//     },
//     downloadSavedFile: function() {
//       var outputText = this.get('controller.renderConfig');
//       var blob = new Blob([outputText], { type: 'text/plain' });
//       saveAs(blob, 'autoexec.cfg');
//     },
//     newEdit: function(data) {
//       this.transitionTo('new', {queryParams: {slug: data}});
//     }
//   }
// });
