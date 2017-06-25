import Ember from 'ember';

export function bookmarkTitle([title, about]/*, hash*/) {
  let rtnStr = title;

  if(about != null) {
    rtnStr += ' - ' + about;
  }

  return rtnStr;
}

export default Ember.Helper.helper(bookmarkTitle);
