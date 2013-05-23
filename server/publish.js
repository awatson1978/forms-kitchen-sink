Meteor.publish('customerAccounts', function () {
    try{
        return CustomerAccounts.find();
    }catch(error){
        console.log(error);
    }
});
