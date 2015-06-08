import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var onSuccess = function(hash) {
      return hash;
    };
    var onFail = function(xhr) {
      var errors = Ember.$.parseJSON(xhr.responseText).errors;
      return alert(errors);
    };
    return this.store.findAll('<%= dasherizedModuleName %>').then(onSuccess, onFail);
  },
});
