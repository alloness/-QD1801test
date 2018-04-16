define(["jquery", "jquery-cookie"], function($){
    function hdsearch(){
        $(document).scroll(function(){
            //alert($(window).scrollTop());
            if($(document).scrollTop() > 0 && $(document).scrollTop() < 200){
                $(".hd_search_fixed").css("top", "-60px");
            }else if($(document).scrollTop() >= 200){
                $(".hd_search_fixed").css("top", "0");
            }
        })
    }
    return{
        hdsearch: hdsearch
    }
})