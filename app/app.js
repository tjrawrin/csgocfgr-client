import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Ember.TextField.reopen({ attributeBindings: ['data-command'] });
Ember.Checkbox.reopen({ attributeBindings: ['data-command'] });
// Ember.Select.reopen({ attributeBindings: ['data-command'] });
Ember.TextArea.reopen({ attributeBindings: ['data-upload'] });

loadInitializers(App, config.modulePrefix);

export default App;
