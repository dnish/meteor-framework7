Template.popup.onRendered(function() {

    $$('#dynamicPopup').on('closed', function () {
        dynPopup.set(null);
    });
});

Template.popup.onDestroyed(function() {

    console.log("Template/Popup was destroyed");
});
Template.popup.events({
    'click .icon-back': function(e) {
        myApp.closeModal("#dynamicPopup");
    }
});