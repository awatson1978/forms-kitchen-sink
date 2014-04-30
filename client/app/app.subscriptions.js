Meteor.autorun(function(){
  Meteor.subscribe('customerAccounts', Session.get('account_search_term'));
});