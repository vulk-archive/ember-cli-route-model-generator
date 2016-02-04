import DS from "ember-data";
import Ember from 'ember';
// export default DS.FixtureAdapter.extend({});

export default DS.RESTAdapter.extend({
  // This is broken if there is no serializer for the rails API
  // Keep this commented out until further notice
  //
  // pathForType: function(type) {
  //   var decamelized = Ember.String.decamelize(type);
  //   return Ember.String.pluralize(decamelized);
  // },
});

