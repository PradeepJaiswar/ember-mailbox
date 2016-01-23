import Ember from 'ember';

export function trimCharacter(params, { string, number}) {	
	return string.substring(0, number);
}

export default Ember.Helper.helper(trimCharacter);
