Template.menue.events({
    'click a': function(e)
    {
        //Because we use Iron Router, the default close event isn't working ;)
        myApp.closePanel();
    }
});