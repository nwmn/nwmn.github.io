$(document).ready(function(){
    $("#one").hover(function(){
    //On Hover - Works on ios
        $("#one").css("background-color", "rgba(255, 255, 255, 0.25)");
    }, function(){
        //Hover Off - Hover off doesn't seem to work on iOS
        $("#one").css("background", "rgba(255,255,255,0)");
    }, $("#two").hover(function(){
    //On Hover - Works on ios
        $("#two").css("background-color", "rgba(255, 255, 255, 0.25)");
    }, function(){
        //Hover Off - Hover off doesn't seem to work on iOS
        $("#two").css("background", "rgba(255,255,255,0)");
    }, $("#three").hover(function(){
    //On Hover - Works on ios
        $("#three").css("background-color", "rgba(255, 255, 255, 0.25)");
    }, function(){
        //Hover Off - Hover off doesn't seem to work on iOS
        $("#three").css("background", "rgba(255,255,255,0)");
    }, $("#four").hover(function(){
    //On Hover - Works on ios
        $("#four").css("background-color", "rgba(255, 255, 255, 0.25)");
    }, function(){
        //Hover Off - Hover off doesn't seem to work on iOS
        $("#four").css("background", "rgba(255,255,255,0)");
    }))))

});
