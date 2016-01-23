import DS from 'ember-data';
export default DS.Model.extend({
    from        :  DS.attr('string'),
    fromEmails  :  DS.attr('string'),
    to          :  DS.attr('string'),
    toEmail 	:  DS.attr('string'),
    subject     :  DS.attr('string'),
    description :  DS.attr('string'),
    date        :  DS.attr('string'),
});
