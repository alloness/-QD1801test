define(["jquery", "jquery-cookie"],function($){
    function firstmove(){
        var aBtns = $(".promo_show").find("ol").find("li");
        var oUl = $(".promo_wrapper").find("ul");
        var aLis = oUl.find("li");
        var iNow = 0;
        var eNow = 0;
        var timer = null;
        aBtns.mousemove(function(){
            clearInterval(timer);
            iNow = $(this).index();
            tab();
        })
        function tab(){
            aLis.removeClass("cur").eq(iNow).addClass("cur");
            aBtns.removeClass("active").eq(iNow).addClass("active");
            if(iNow == 8){
                iNow = 0;
                aBtns.eq(0).addClass("active");
                aLis.eq(0).addClass("cur");
            }
        }
        function timerInner(){
            iNow++;
            tab();
            // document.title = iNow
        }
        timer = setInterval(timerInner,2000);
        $(".mod_promo_show").hover(function(){

            clearInterval(timer);
            var eNow = $(this).index();
            $(".show_next").css("display", "block");
            $(".show_pre").css("display", "block");

            $(".show_next").click(function(ev){
                //iNow = iNow + 1;
                let inow = 0;
                inow = iNow + 1;

                aLis.removeClass("cur").eq(inow).addClass("cur");
                aBtns.removeClass("active").eq(inow).addClass("active");
                if(inow == 8){
                    inow = 0;
                    aBtns.eq(0).addClass("active");
                    aLis.eq(0).addClass("cur");
                };
                iNow = inow;
            })
            $(".show_pre").click(function(ev){
                //iNow = iNow + 1;
                let pnow = 0;
                pnow = iNow - 1;

                aLis.removeClass("cur").eq(pnow).addClass("cur");
                aBtns.removeClass("active").eq(pnow).addClass("active");
                if(pnow == -1){
                    pnow = 7;
                    aBtns.eq(7).addClass("active");
                    aLis.eq(7).addClass("cur");
                };
                iNow = pnow;
            })
        },function(){
            timer = setInterval(timerInner, 2000);
            $(".show_next").css("display", "none");
            $(".show_pre").css("display", "none");
        })
    }
    return{
        firstmove: firstmove
    }
})