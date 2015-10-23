myApp = null;
$$ = Dom7;


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
});