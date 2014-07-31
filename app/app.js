import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'csgocfgr', // TODO: loaded via config
  Resolver: Resolver
});

Ember.TextField.reopen({ attributeBindings: ['data-command'] });
Ember.Checkbox.reopen({ attributeBindings: ['data-command'] });
Ember.Select.reopen({ attributeBindings: ['data-command'] });

loadInitializers(App, 'csgocfgr');

export default App;
