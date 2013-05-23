//--------------------------------------------------------------------------
// Server Side Helper Functions
//
// requires Meteor.call() from the client to initiate
// used to validate data before inserting new tasks into the database

Meteor.methods({
    createNewCustomer: function (options) {
        try{
            console.log('received a new customer: ' + JSON.stringify(options));

            options = options || {};

            // TODO:  add validation functions
            //        if (!(typeof options.text === "string" && options.text.length)){
            //            throw new Meteor.Error(400, "Required parameter missing");
            //        }
            //
            //        if (options.text.length > 100){
            //            throw new Meteor.Error(413, "Title too long");
            //        }
            //
            //        if (! options.list_id ){
            //            throw new Meteor.Error(413, "No list id!");
            //        }
            //
            //        if (! this.userId){
            //            throw new Meteor.Error(403, "You must be logged in");
            //        }

            return CustomerAccounts.insert({
                FirstName: options.FirstName,
                LastName: options.LastName,
                Company: options.Company,
                Address: options.Address,
                City: options.City,
                County: options.County,
                State: options.State,
                ZIP: options.ZIP,
                Phone: options.Phone,
                Fax: options.Fax,
                Email: options.Email,
                Web: options.Web
            });
        }catch(error){
            console.log(error);
        }
    }
});
