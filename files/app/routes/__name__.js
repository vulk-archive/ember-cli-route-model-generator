import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var onSuccess = function(hash) {
      return hash;
    };
   var onFail = function(xhr) {
      if (xhr.status === 500){
        return alert('Internal server error. Contact administrator');
      }  else if (xhr.status === 404) {
        return true;
      } else {
        var errors = Ember.$.parseJSON(xhr.responseText).errors;
        return alert(errors);
      }
    };
    return this.store.findAll('<%= dasherizedModuleName %>').then(onSuccess, onFail);
  },
});
