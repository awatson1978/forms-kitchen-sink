Canvases =  new Meteor.Collection("cfa-forms");
CustomerAccounts =  new Meteor.Collection("customerAccounts");

Canvases.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});