define(["jquery", "jquery-cookie"], function($){
    function seckillmove(){
        $(function(){
            var oUl = $(".seckill_list_wrap").find("ul");
            //var aLis = oUl.find("li");
            $.ajax({
                url:"../data/seckill.json",
                success:function(data){
                    var html = "";
                    for(var i = 0 ; i < data.length; i++){
                        html += `<li><a href=""><img src="`+data[i].src+`" alt=""><div><p>`+data[i].title+`</p><em>`+data[i].money+`</em><h5>`+data[i].value+`</h5></div></a></li>`
                    }
                    oUl.html(html);
                }
            })

            oUl.on("mouseover", "li", function(){
                //console.log("ojbk");
                $(this).find("a").find("img").css("transform", "translate3d(-5px,0,0)");
            }).on("mouseout", "li", function(){
                $(this).find("a").find("img").css("transform", "translate3d(0,0,0)");
            })

            $(".next_clickable").click(function(ev){
                ev.preventDefault();
                oUl.animate({
                    left: parseInt(oUl.css("left")) - 1020
                }, 1000)

                if(parseInt(oUl.css("left")) <= 0){
                    //console.log("ojbk");
                    oUl.hover(function(){
                        $(".pre_clickable").animate({
                            left: 1
                        }, 1000)
                    }, function(){
                        $(".pre_clickable").animate({
                            left: -20
                        }, 1000)
                    })
                }
                if(parseInt(oUl.css("left")) <= -1020){
                    console.log("ojbk two");
                    $(".next_clickable").css("display", "none");
                }

            })
            $(".pre_clickable").click(function(ev){
                ev.preventDefault();
                oUl.animate({
                    left: parseInt(oUl.css("left")) + 1020
                })
                if(parseInt(oUl.css("left")) >= -2040){
                    console.log("ojbk thr");
                    $(".next_clickable").css("display", "block");
                }
            })


            // alert(parseInt(oUl.css("left")));
            // if(  <= -1020){
            //     console.log("ojbk");
            //     oUl.mouseover(function(){
            //         console.log("ojbk");
            //         $(".pre_clickable").animate({
            //             left: 1
            //         }, 1000)
            //     })
            // }else if( parseInt(oUl.css("left")) <= -2040){
            //     $(".next_clickable").css("display", "none");
            // }


            // $("next_clickable").hover(function(){
            //     $(this).css("")
            // })

        })
    }
    return{
        seckillmove: seckillmove
    }
})