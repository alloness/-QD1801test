define(["jquery", "jquery-cookie"], function($){
    function shoplist(){
        $(function(){
            $(".shopli_hd_allsort").hover(function(){
                $(this).find("ul").css("display", "block")
            }, function(){
                $(this).find("ul").css("display", "none")
            })

            $.ajax({
                url:"../data/forexample.json",
                // type:"GET",
                success:function(res){
                    //console.log(res);
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += `<li class="goods_item">
                    <div class="goods_pic"><img src="${res[i].img}" alt=""></div>
                    <span>${res[i].money}</span>
                    <p class="goods_title">${res[i].title}</p>
                    <div class="sc">
                        <i>${res[i].store}</i>
                        <div class="sc_btn" id="${res[i].id}">加入购物车</div>
                    </div>
                </li>`
                    }
                    $(".goods_list").html(html);
                }
            })

            $(".goods_list").on("click", ".sc_btn", function(){
                //alert(this.id);
                var id = this.id;
                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    $.cookie("goods", '[{id:' + id + ',num:1}]', {
                        expires: 7
                    });
                }else{
                    var str = $.cookie("goods");
                    var arr = eval(str);
                    var same = false;
                    for(var i in arr){
                        if(arr[i].id == id){
                            arr[i].num = arr[i].num + 1;
                            var cookieStr = JSON.stringify(arr);
                            $.cookie("goods", cookieStr,  {
                                expires: 7
                            });
                            same = true;
                            break;
                        }
                    }
                    if(!same){
                        var obj = {id: id, num: 1};
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods", cookieStr, {
                            expires: 7
                        });
                    }
                }
                sc_car();

                var cart = $(".prism_cart_wrap");
                var imgtodrag = $(this).parents("li").find("div").eq(0).find("img");
                var imgclone = imgtodrag.clone().offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                }).css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '190px',
                    'width': '164px',
                    'z-index': '100'
                }).appendTo($('body')).animate({
                    'top': cart.offset().top,
                    'left': cart.offset().left,
                    'width': 75,
                    'height': 75
                }, 1000);
                imgclone.animate({
                    'width': 10,
                    'height': 10
                }, function () {
                    $(this).detach();
                });
                return false;
            })
            function sc_car(){
                var sc_str = $.cookie("goods");
                if(sc_str){
                    var sc_arr = eval(sc_str);
                    var sc_num = 0;
                    for(var i in sc_arr){
                        sc_num = Number(sc_arr[i].num) + sc_num;
                    }
                    $(".prism_cart_num").find("u").html(sc_num);
                }
            }
            //alert($.cookie("goods"));
            sc_msg();
            function sc_msg(){
                $.ajax({
                    url: "../data/forexample.json",
                    type: "get",
                    success: function(res){
                        var sc_arr = eval($.cookie("goods"));
                        var html = '';
                        for(var i in sc_arr){
                           html += `<li class="cart_list"><h4>${res[sc_arr[i].id].store}</h4><h5><img src="${res[sc_arr[i].id].img}" alt=""><p>${res[sc_arr[i].id].title}</p><span>${res[sc_arr[i].id].money}</span><i>${sc_arr[i].num}</i><em></em><em></em></h5><h6>商品总价：<u>￥299</u></h6></li>`;
                        }
                        $(".cart_list_wrap").html(html);
                    }
                })
            }
        })
    }
    return{
        shoplist: shoplist
    }
})
