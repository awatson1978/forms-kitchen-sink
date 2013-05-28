Template.usersListTemplate.userList = function(){
    try{
        return CustomerAccounts.find({
        //FirstName: { $regex: Session.get('account_search_term'), $options: 'i' }
            $or: [
                {'FirstName': { $regex: Session.get('account_search_term'), $options: 'i' }},
                {'LastName':  { $regex: Session.get('account_search_term'), $options: 'i' }}
            ]
        },{limit: 10});
    }catch(error){
        console.log(error);
    }
};
Template.userListItemTemplate.events({
    'click .list-group-item':function(event, template){
        Session.set('selected_user', this._id);
        Session.set('current_task','view');
    }
});
Template.usersListTemplate.events({
    'keyup #customerSearchInput': function(evt,tmpl){
        try{
            //Session.set('user_search_term', $('#customerSearchInput').val());
            Session.set('account_search_term', $('#customerSearchInput').val());
            console.log($('#customerSearchInput').val());
            Meteor.flush();
        }catch(err){
            console.log(err);
        }
    }
});