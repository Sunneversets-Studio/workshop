$(document).ready(function(){
    $('#fanE').click(function(){
        $(this).toggleClass("on off");
        if($(this).hasClass("on")){
            WINDEC()
        }else{
            WINDE()
        }
    });
    $('#fanW').click(function(){
        $(this).toggleClass("on off");
        if($(this).hasClass("on")){
            WINDWC()
        }else{
            WINDW()
        }
    });
});
