//-------------------------------------------------------------
// A. Sessions Variables

Session.set('editing_first_name', false);
Session.set('editing_last_name', false);
Session.set('editing_company', false);
Session.set('editing_address', false);
Session.set('editing_city', false);
Session.set('editing_county', false);
Session.set('editing_state', false);
Session.set('editing_zip', false);
Session.set('editing_phone', false);
Session.set('editing_fax', false);
Session.set('editing_email', false);
Session.set('editing_web', false);

Session.set('editing_password', false);
Session.set('editing_date', false);
Session.set('editing_birthdate', false);
Session.set('editing_month', false);
Session.set('editing_week', false);
Session.set('editing_time', false);
Session.set('editing_number', false);
Session.set('editing_color', false);

Session.set('is_deleting_task', false);

//-------------------------------------------------------------
// B.  Helpers

Template.formTemplate.helpers({
    user: function(){
        try{
            if(Session.get('current_task') == 'new'){
                return {"FirstName":"","LastName":"","Company":"","Address":"","City":"","County":"","State":"","ZIP":"","Phone":"","Fax":"","Email":"","Web":""};
            }else{
                return CustomerAccounts.findOne(Session.get('selected_user'));
            }
        }catch(error){
            console.log(error);
        }
    }
});


//-------------------------------------------------------------
// C. Event Map

Template.formTemplate.events({

    //-------------------------------------------------------------
    // 1. Desktop Clicks - Editing

    'click #firstNameInput':function(){
        Session.set('editing_first_name', true);
        Meteor.flush();
    },
    'click #lastNameInput':function(){
        Session.set('editing_last_name', true);
        Meteor.flush();
    },
    'click #companyInput':function(){
        Session.set('editing_company', true);
        Meteor.flush();
    },
    'click #addressInput':function(){
        Session.set('editing_address', true);
        Meteor.flush();
    },
    'click #cityInput':function(){
        Session.set('editing_city', true);
        Meteor.flush();
    },
    'click #countyInput':function(){
        Session.set('editing_county', true);
        Meteor.flush();
    },
    'click #stateInput':function(){
        Session.set('editing_state', true);
        Meteor.flush();
    },
    'click #zipInput':function(){
        Session.set('editing_zip', true);
        Meteor.flush();
    },
    'click #phoneInput':function(){
        Session.set('editing_phone', true);
        Meteor.flush();
    },
    'click #faxInput':function(){
        Session.set('editing_fax', true);
        Meteor.flush();
    },
    'click #emailInput':function(){
        Session.set('editing_email', true);
        Meteor.flush();
    },
    'click #webInput':function(){
        Session.set('editing_web', true);
        Meteor.flush();
    },


    'click #passwordInput':function(){
        Session.set('editing_password', true);
        Meteor.flush();
    },
    'click #dateInput':function(){
        Session.set('editing_date', true);
        Meteor.flush();
    },
    'click #birthdateInput':function(){
        Session.set('editing_birthdate', true);
        Meteor.flush();
    },
    'click #monthInput':function(){
        Session.set('editing_month', true);
        Meteor.flush();
    },
    'click #weekInput':function(){
        Session.set('editing_week', true);
        Meteor.flush();
    },
    'click #timeInput':function(){
        Session.set('editing_time', true);
        Meteor.flush();
    },
    'click #numberInput':function(){
        Session.set('editing_number', true);
        Meteor.flush();
    },
    'click #colorInput':function(){
        Session.set('editing_color', true);
        Meteor.flush();
    },


    //-------------------------------------------------------------
    // 2. Mobile Tabs - Editing

    'mouseout #firstNameInput':function(){
        Session.set('editing_first_name', false);
        Meteor.flush();
    },
    'mouseout #lastNameInput':function(){
        Session.set('editing_last_name', false);
        Meteor.flush();
    },
    'mouseout #companyInput':function(){
        Session.set('editing_company', false);
        Meteor.flush();
    },
    'mouseout #addressInput':function(){
        Session.set('editing_address', false);
        Meteor.flush();
    },
    'mouseout #cityInput':function(){
        Session.set('editing_city', false);
        Meteor.flush();
    },
    'mouseout #countyInput':function(){
        Session.set('editing_county', false);
        Meteor.flush();
    },
    'mouseout #stateInput':function(){
        Session.set('editing_state', false);
        Meteor.flush();
    },
    'mouseout #zipInput':function(){
        Session.set('editing_zip', false);
        Meteor.flush();
    },
    'mouseout #phoneInput':function(){
        Session.set('editing_phone', false);
        Meteor.flush();
    },
    'mouseout #faxInput':function(){
        Session.set('editing_fax', false);
        Meteor.flush();
    },
    'mouseout #emailInput':function(){
        Session.set('editing_email', false);
        Meteor.flush();
    },
    'mouseout #webInput':function(){
        Session.set('editing_web', false);
        Meteor.flush();
    },


    'mouseout #passwordInput':function(){
        Session.set('editing_password', true);
        Meteor.flush();
    },
    'mouseout #dateInput':function(){
        Session.set('editing_date', true);
        Meteor.flush();
    },
    'mouseout #birthdateInput':function(){
        Session.set('editing_birthdate', true);
        Meteor.flush();
    },
    'mouseout #monthInput':function(){
        Session.set('editing_month', true);
        Meteor.flush();
    },
    'mouseout #weekInput':function(){
        Session.set('editing_week', true);
        Meteor.flush();
    },
    'mouseout #timeInput':function(){
        Session.set('editing_time', true);
        Meteor.flush();
    },
    'mouseout #numberInput':function(){
        Session.set('editing_number', true);
        Meteor.flush();
    },
    'mouseout #colorInput':function(){
        Session.set('editing_color', true);
        Meteor.flush();
    }

})

    //-------------------------------------------------------------
    // 3. Submit
    // 4. Stop Editing

Template.formTemplate.events(
    okCancelEvents('#firstNameInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'FirstName': value }});
                Session.set('editing_first_name', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_first_name', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#lastNameInput',
        {
            ok: function (value) {
                try{
                    CustomerAccounts.update(Session.get('selected_user'), {$set: { 'LastName': value }});
                    Session.set('editing_last_name', false);
                    Meteor.flush();
                }catch(error){
                    console.log(error);
                }
            },
            cancel: function () {
                Session.set('editing_last_name', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#companyInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Company': value }});
                Session.set('editing_company', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_company', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#addressInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Address': value }});
                Session.set('editing_address', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_address', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#cityInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'City': value }});
                Session.set('editing_city', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_city', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#countyInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'County': value }});
                Session.set('editing_county', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_county', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#stateInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'State': value }});
                Session.set('editing_state', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_state', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#zipInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'ZIP': value }});
                Session.set('editing_zip', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_zip', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#phoneInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Phone': value }});
                Session.set('editing_phone', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_phone', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#faxInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Fax': value }});
                Session.set('editing_fax', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_fax', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#emailInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Email': value }});
                Session.set('editing_email', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_email', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#webInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Web': value }});
                Session.set('editing_web', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_web', false);
            }
        })
);



Template.formTemplate.events(
    okCancelEvents('#passwordInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Password': value }});
                Session.set('editing_password', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_password', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#dateInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Date': value }});
                Session.set('editing_date', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_date', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#birthdateInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Birthdate': value }});
                Session.set('editing_birthdate', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_birthdate', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#monthInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Month': value }});
                Session.set('editing_month', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_month', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#weekInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Week': value }});
                Session.set('editing_week', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_week', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#timeInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Time': value }});
                Session.set('editing_time', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_time', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#numberInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Number': value }});
                Session.set('editing_number', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_number', false);
            }
        })
);
Template.formTemplate.events(
    okCancelEvents('#colorInput',
        {
            ok: function (value) {
                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Color': value }});
                Session.set('editing_color', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_color', false);
            }
        })
);


//-------------------------------------------------------------
// D. Display Readonly Value

Template.formTemplate.first_name_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_first_name')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.last_name_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_last_name')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.company_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_company')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.address_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_address')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.city_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_city')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.county_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_county')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.state_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_state')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.zip_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_zip')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.phone_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_phone')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.fax_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_fax')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.email_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_email')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.web_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_web')){
        return "enabled";
    }else{
        return "readonly";
    }
};


Template.formTemplate.password_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_password')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.date_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_date')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.datetime_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_datetime')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.month_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_month')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.week_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_week')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.time_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_time')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.number_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_number')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.formTemplate.color_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_color')){
        return "enabled";
    }else{
        return "readonly";
    }
};


Template.formTemplate.generic_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else{
        return "readonly";
    }
};




//-------------------------------------------------------------
// E. Buttons

Template.formTemplate.isNewTask = function(){
    try{
        if(Session.get('current_task') == 'new'){
            return true;
        }else{
            return false;
        }
    }catch(error){
        console.log(error);
    }
};
Template.formTemplate.isDeletingTask = function(){
    try{
        if(Session.get('current_task') == 'delete'){
            return true;
        }else{
            return false;
        }
    }catch(error){
        console.log(error);
    }
};


Template.formTemplate.events({
    'click #newUserButton': function(){
        console.log('creating new user...');

        try{

            // TODO:  add validation functions
            if ($('#firstNameInput').val().length) {

                Meteor.call('createNewCustomer', {
                    FirstName: $('#firstNameInput').val(),
                    LastName: $('#lastNameInput').val(),
                    Company: $('#companyInput').val(),
                    Address: $('#addressInput').val(),
                    City: $('#cityInput').val(),
                    County: $('#countyInput').val(),
                    State: $('#stateInput').val(),
                    ZIP: $('#zipInput').val(),
                    Phone: $('#phoneInput').val(),
                    Fax: $('#faxInput').val(),
                    Email: $('#emailInput').val(),
                    Web: $('#webInput').val(),

                    Password: $('#passwordInput').val(),
                    Date: $('#dateInput').val(),
                    Birthdate: $('#birthdateInput').val(),
                    Month: $('#monthInput').val(),
                    Week: $('#weekInput').val(),
                    Time: $('#timeInput').val(),
                    Number: $('#numberInput').val(),
                    Color: $('#colorInput').val()
                }, function (error, customer) {
                    console.log('error: ' + error);
                    console.log('customer: ' + customer);
                });
            } else {
                Session.set("createError",
                    "Customer needs a name, or why bother?");
            }
            evt.target.value = '';
        }catch(err){
            console.log(err);
        }

        Session.set('current_task','view');
    },
    'click #deleteUserButton': function(){
        CustomerAccounts.remove(Session.get('selected_user'));
        Session.set('current_task','view');
    },
    'click #cancelDeleteButton': function(){
        Session.set('current_task','view');
    }
});
