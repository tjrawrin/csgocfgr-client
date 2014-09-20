import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.TextField.reopen({ attributeBindings: ['data-command'] });
Ember.Checkbox.reopen({ attributeBindings: ['data-command'] });
Ember.Select.reopen({ attributeBindings: ['data-command'] });
Ember.TextArea.reopen({ attributeBindings: ['data-upload'] });

loadInitializers(App, config.modulePrefix);

export default App;
