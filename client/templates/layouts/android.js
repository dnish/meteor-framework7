Template.android.onRendered(function() {
    initLayout();
    
});

Template.android.helpers({
    'dynamicPopup': function() {
        if(dynPopup.get() == null)
        {
            return {template:null,data:null}
        }
        else
        {
            return {template:dynPopup.get().template,data:dynPopup.get().data}
        }
    }
})