import Ember from 'ember';
export default Ember.Route.extend({  
    model() {
     return this.store.findAll('mail');
    },
   setupController: function(controller, model) {
    controller.set('mails', model);
  	},
});



