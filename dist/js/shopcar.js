define(["jquery", "jquery-cookie", "shoplist"], function(){
    function shopcar(){
        $(function(){
            //sc_msg();
            // function sc_msg(){
            //     $.ajax({
            //         url: "../data/forexample.json",
            //         type: "get",
            //         success: function(res){
            //             var sc_arr = eval($.cookie("goods"));
            //             var html = '';
            //             for(var i in sc_arr){
            //                $('<li class="cart_list"><h4>${res[sc_arr[i].id].store}</h4><h5><img src="${res[sc_arr[i].id].img}" alt=""><p>${res[sc_arr[i].id].title}</p><span>${res[sc_arr[i].id].money}</span><i>${sc_arr[i].num}</i><em></em><em></em></h5><h6>商品总价：<u>￥299</u></h6></li>').appendTo($(".cart_list_wrap"));
            //             }
            //             // $(".cart_list_wrap").html(html);
            //         }
            //     })
            // }
        })
    }
    return{
        shopcar: shopcar
    }
})