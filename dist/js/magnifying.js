define(["jquery", "jquery-cookie"], function(){
    function magnifying(){
        $(function(){
            var oS_box = $('.proImg_border');
            var oS_position = $(".position_box")
            var oS_mark = $(".mark_box")
            var oB_box = $('.j_zoom');
            var oB_box_all = $('.b_box_all')
            oS_mark.mouseover(function(){
                oS_position.css("display", "block");
                oB_box.css("display", "block")
            })
            oS_mark.mouseout(function(){
                oS_position.css("display", "none");
                oB_box.css("display", "none");
            })

            oS_mark.mousemove(function(event){
                var evt=event||window.event;

                var left=evt.offsetX-oS_position.width()/2;
                //console.log(left)

                if(left<0){
                    left=0 + 20;
                }else if(left>oS_box.width()-oS_position.width()){
                    left=oS_box.width()-oS_position.width()+20
                }
                //console.log(left)
                oS_position.css("left",left+`px`);


                var top=evt.offsetY-oS_position.height()/2;
                if(top<0){
                    top=0+20;
                }else if(top>oS_box.height()-oS_position.height()){
                    top=oS_box.height()-oS_position.height()+20
                }
                //console.log(top)
                oS_position.css("top", top+`px`)

                //移动的比例  把X值和Y值换算成比例;

                var proportionX=left/(oS_box.width()-oS_position.width());
                var proportionY=top/(oS_box.height()-oS_position.height());

                //console.log(proportionX+':'+proportionY)

                //利用比例去算出大小不同的元素的偏移距离；
                // oB_box_all.css({
                //     left:-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth),
                //     top: -proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)
                // })

                oB_box_all.css("left", -proportionX*(oB_box_all.width()-oB_box.width())+'px');

                oB_box_all.css("top", -proportionY*(oB_box_all.height()-oB_box.height())+'px');
            })

            $.ajax({
                url:"../data/magnifying.json",
                success:function(res){
                    //console.log(res);
                    for(var i = 0 ; i < res.length; i++){
                        //console.log(res[i].mimg);
                        var arr = JSON.parse(res[i].mimg);
                        console.log(arr);
                        $(".hide_box").eq(i).mouseover(function(){
                            $(this).css("border-color", "#999");
                            $(".proImg_border").find("img").attr("src", res[i].mimg);
                            $(".b_box_all").find("img").attr("src", res[i].bimg)
                        }).mouseout(function(){
                            $(this).css("border-color", "#fff");
                        })
                        // $(".hide_box").on("mouseover", "li", function(){
                        //     $(this).css("border-color", "#999")
                        //     $(".proImg_border").find("img").
                        // }).on("mouseout", "li", function(){
                        //     $(this).css("border-color", "#fff")
                        // })
                    }
                }
            })
        })
    }
    return{
        magnifying: magnifying
    }
})