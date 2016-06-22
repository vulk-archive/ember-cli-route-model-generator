import Ember from 'ember';
// import onFailure404Ok from '<<main-application-directory-name>>/utils/on-failure-404-ok';
// import onFailure from '<<main-application-directory-name>>/utils/on-failure';
// import onSuccessReturnResponse from '<<main-application-directory-name>>/utils/on-success-return-response';
// import onFailure404Create from 'beneplace3000/utils/on-failure-404-create';

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
  actions: {
    <%= 'add' + classifiedModuleName %>: function() {    
      this.controllerFor(this.routeName).store.createRecord('<%= dasherizedModuleName %>');
      
    },
    <%= 'save' + classifiedModuleName %>: function(){    
      var onSuccess = function() {    
        alert('<%= classifiedModuleName %> Saved.');   
      };

      var onFail = function(xhr) {
        var errors;
        if (xhr.status === 500){
          return alert('Internal server error. Contact administrator');
        }  else if (xhr.status === 404) {
          errors = Ember.$.parseJSON(xhr.responseText).errors;
          return alert(errors);
        }  else if (xhr.status === 422) {
          errors = Ember.$.parseJSON(xhr.responseText).errors;
          return alert(errors);
        } else {
          errors = Ember.$.parseJSON(xhr.responseText).errors;
          return alert(errors);
        }
      }.bind(this);
 
      var model = this.modelFor(this.routeName);        
      // debugger;
      model.save().then(onSuccess, onFail);
    },
      
  }
});
