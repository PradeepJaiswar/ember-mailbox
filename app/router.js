import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('mails')	
  this.route('mails', { path: '/mails/:mail_id' });
  this.route('compose');
});

export default Router;
