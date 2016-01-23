import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'',
	actions: {
    showMailDetails(id) {
    	alert(id + ' was clicked '); 
    },

  }

});
