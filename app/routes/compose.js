import Ember from 'ember';

export default Ember.Route.extend({
  tagName:'',
  actions: {
    sendMail(objMail) {
     let mail = this.store.createRecord('mail',objMail);
     mail.save();
     this.transitionTo('/');
   }
 }
});
