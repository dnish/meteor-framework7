myApp = null;
$$ = Dom7;
dynPopup = new ReactiveVar(null);


initLayout = function()
{


    if(myApp == null)
    {
        myApp = new Framework7({
            material: true,
            materialRipple: false, //having some performance problems....
            showBarsOnPageScrollEnd: false,
        });




    }
    else
    {
        myApp.init();

    }



}


//Doing some startup settings

Meteor.startup(function() {
    Transitioner.default({
        in: "transition.fadeIn",
        out: "transition.fadeOut"
    });


    //Cordova back button functionality
    document.addEventListener("backbutton", function (e) {

        e.preventDefault();
        var elem = popupIsOpen();
        var elemPhoto = photoOpen();


        if (elemPhoto) {

            myPhotoBrowser.close();

        }
        else if (elem) {
            myApp.closeModal("#" + elem.attr('id'));
        }
        else {
            window.history.back();
        }


    });

});