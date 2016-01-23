import Ember from 'ember';

export function removeHtml(params, {html}) {
  return html.replace(/<(?:.|\n)*?>/gm, '');
}

export default Ember.Helper.helper(removeHtml);
