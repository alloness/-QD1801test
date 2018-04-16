define(["jquery", "jquery-cookie"], function($){
    function prism(){
        $(function(){
            $(".prism_person_wrap").add($(".prism_coupon_wrap")).find("a").hover(function(){
                $(this).find("span").css("background-color", "#ff4040");
                $(this).find("u").css("backgroundColor", "#ff4040");
                $(this).find("u").stop().animate({
                    right: 34,
                }, 500)
            }, function(){
                $(this).find("span").css("background-color", "pink");
                $(this).find("u").css("backgroundColor", "#3c3c3c");
                $(this).find("u").stop().animate({
                    right: -60,
                }, 500)
            })
            $(".prism_cart_wrap").find("a").hover(function(){
                $(this).css("background-color", "#ff4040");
            }, function(){
                $(this).css("background-color", "#454545");
            })
            $(".prism_feedback_wrap").add($(".prism_backtop_wrap")).find("a").hover(function(){
                $(this).find("span").css("background-color", "#ff4040");
                $(this).find("u").css("backgroundColor", "#ff4040");
                $(this).find("u").stop().animate({
                    right: 34,
                }, 500)
            }, function(){
                $(this).find("span").css("background-color", "pink");
                $(this).find("u").css("backgroundColor", "#3c3c3c");
                $(this).find("u").stop().animate({
                    right: -60,
                }, 500)
            })
            $(".prism_qrcode_wrap").find("a").hover(function(){
                $(this).find("span").css("background-color", "#ff4040");
                $(".prism_qrcode_wrap").find("div").css("display", "block");
            }, function(){
                $(this).find("span").css("background-color", "#454545");
                $(".prism_qrcode_wrap").find("div").css("display", "none");
            })
            $(".prism_backtop_wrap").find("a").click(function(ev){
                ev.stopPropagation();
                ev.preventDefault();
                $("body, html").animate({
                    scrollTop : 0
                }, 200);
                //alert($(window).scrollTop());
            })
        })
    }
    return{
        prism:prism
    }
})