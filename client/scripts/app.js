$(document).ready(function(){


    $(".resumepart").hide();




    $("#hide").click(function(){
        $(".cover-part").hide(1000);
        $(".resumepart").slideDown(1000);
    });
    $(".resumepart").click(function(){
        $(".resumepart").slideUp(1000);
        $(".cover-part").show(1000);
    });

});