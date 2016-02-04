import DS from "ember-data";
import Ember from 'ember';
// export default DS.FixtureAdapter.extend({});

export default DS.RESTAdapter.extend({
  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    return Ember.String.pluralize(decamelized);
  },
});

