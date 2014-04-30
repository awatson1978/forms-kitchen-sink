Template.appContainerTemplate.events({
    'click .edit-button': function(){
        Session.set('current_task','edit');
        toggleSession('global_edit');
    },
    'click .new-button': function(){
        Session.set('current_task','new');
        Session.set('selected_user', 'newuser');
        Session.set('global_edit', true);
        Session.set('show_create_user_button', true);
    },
    'click .delete-button': function(){
        if(Session.get('selected_user') != ('' || 'newuser')){
            Session.set('current_task','delete');
        }
    },
    'click .view-button': function(){
        Session.set('current_task','view');
    }
});

Template.appContainerTemplate.title = function(){
    return Session.get('account_search_term');
}


//-----------------------------------------------------
// NAVBARS
