import Ember from 'ember';
export default Ember.Route.extend({  
  model(params) {
    if(params.mail_id) {
      return this.store.findRecord('mail',params.mail_id);
    }
  },
  setupController: function(controller, model) {
    controller.set('mailDetails', model);
  },
  actions: {
   deleteMail(id) {
     /* what does this action do*/
     this.store.find('mail', id).then((mail) => {
          mail.destroyRecord(); 
          this.transitionTo('/');
        }
        );
   }
 }

});



