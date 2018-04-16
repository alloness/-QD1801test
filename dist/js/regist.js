define(["jquery", "jquery-cookie"], function($){
    function regist(){
        $(function(){
            var aLis = $(".y_regist_model").find("ul").find("li");
            for(var i = 0; i < aLis.length; i++){
                aLis.eq(i).find("input").focus(function(){
                    $(this).siblings("span").stop().animate({
                        left: -77
                    }, 500);
                    $(this).siblings("p").stop().css("display", "inline-block")
                })
            }
            aLis.eq(0).find("input").blur(function(){
                var str = $(this).val().trim();
                $(this).val(str);
                var ova = $(this).siblings("p");
                //console.log(ova);
                if(!str){
                    ova.html("用户名不能为空");
                    ova.css("background-color", "#fff4d7")
                }else if(str.length > 20 || str.length < 4){
                    ova.html("用户名是4~20位");
                    ova.css("background-color", "#fff4d7")
                }else if(/^\d{4,20}$/.test(str)){
                    ova.html("用户名不能全是数字");
                    ova.css("background-color", "#fff4d7")
                }else{
                    ova.html("ok");
                    ova.css("background-color", "#e4e4e4")
                }
            })
            aLis.eq(1).find("input").blur(function(){
                var str = $(this).val().trim();
                $(this).val(str);
                var ova = $(this).siblings("p");
                //console.log(ova);
                if(!str){
                    ova.html("手机号不能为空");
                    ova.css("background-color", "#fff4d7")
                }else if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(str)){
                    ova.html("请填写正确的手机号");
                    ova.css("background-color", "#fff4d7")
                }else{
                    ova.html("ok");
                    ova.css("background-color", "#e4e4e4")
                }
            })
            aLis.eq(3).find("input").blur(function(){
                var str = $(this).val().trim();
                $(this).val(str);
                var ova = $(this).siblings("p");
                //console.log(ova);
                if(!str){
                    ova.html("请填写正确的密码");
                    ova.css("background-color", "#fff4d7")
                }else if(str.length > 20 || str.length < 6){
                    ova.html("密码应为6-20位");
                    ova.css("background-color", "#fff4d7")
                }else if(/^\d{6,20}$/.test(str)){
                    ova.html("密码不能全是数字");
                    ova.css("background-color", "#fff4d7")
                }else if(/^[\u4E00-\u9FA5]+$/.test(str)){
                    ova.html("不能有汉字");
                    ova.css("background-color", "#e4e4e4")
                }else{
                    ova.html("ok");
                    ova.css("background-color", "#e4e4e4")
                }
            })
            aLis.eq(4).find("input").blur(function(){
                var dbstr = aLis.eq(3).find("input").val().trim();
                var str = $(this).val().trim();
                $(this).val(str);
                var ova = $(this).siblings("p");
                //console.log(ova);
                if(!str){
                    ova.html("请再次输入密码");
                    ova.css("background-color", "#fff4d7")
                }else if(str != dbstr){
                    ova.html("两次输入密码不一致");
                    ova.css("background-color", "#fff4d7")
                }else{
                    ova.html("ok");
                    ova.css("background-color", "#e4e4e4")
                }
            })
        })
    }
    return{
        regist:regist
    }
})