Template.start.onRendered(function() {
    initLayout();
});

Template.start.events({
    'click .open-popup': function(e) {

        var randomString = Random.id(6);
        dynPopup.set({template:'popup',data:{test:randomString}});
        myApp.popup("#dynamicPopup")
    }
});