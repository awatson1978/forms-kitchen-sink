Meteor.publish('cfa-forms', function () {
    return Canvases.find();
});