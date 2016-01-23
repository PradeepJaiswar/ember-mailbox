import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'',
	actions: {
	    deleteMail(id) {
	    	this.sendAction('deleteMail',id)
	    }
	 }
});
