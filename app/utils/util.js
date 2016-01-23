let util = {
	getMailDate (){ 
		return new Date().toLocaleString(); 
	},
	getNameFromEmail(email){ 
		return email.substr(0, email.indexOf('@')); 
	},

	
};

export default util;
