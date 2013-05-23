Template.usersListTemplate.userList = function(){
    try{
        return CustomerAccounts.find({
            $or: [
                {'FirstName': { $regex: Session.get('user_search_term'), $options: 'i' }},
                {'LastName':  { $regex: Session.get('user_search_term'), $options: 'i' }}
            ]
        },{limit: 20});
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
            Session.set('user_search_term', $('#customerSearchInput').val());
            Meteor.flush();
        }catch(err){
            console.log(err);
        }
    }
});