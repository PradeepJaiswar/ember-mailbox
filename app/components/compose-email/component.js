import Ember from 'ember';
import session from 'ember-mailbox/utils/session';
import util from 'ember-mailbox/utils/util';

export default Ember.Component.extend({
    tagName:'',
    actions: {
      sendMail() {
        let objMail = { 
                from        : session.getName(),
                fromEmails  : session.getEmail(),
                to          : util.getNameFromEmail(this.get("to")), 
                toEmail     : this.get("to"),
                subject     : this.get("subject"),
                description : this.get("description"),
                date        : util.getMailDate(),            
            };
        this.sendAction('sendMail', objMail);
    }
}
});
