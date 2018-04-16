define(["jquery", "jquery-cookie"] ,function($){
    function youlike(){
        $(function(){
            var oUl = $(".youlike_list");
            $.ajax({
                url:"../data/youlike.json",
                success:function(data){
                    var html = "";
                    for(var i = 0; i < data.length; i++){
                        html += `<li>
                        <a href="">
                    <img src="${data[i].src}" alt="">
                    <p>${data[i].title}</p>
                    <dl>
                        <dt>${data[i].money}</dt>
                        <dd>${data[i].coupon}</dd>
                    </dl>
                    <div>
                        <span>${data[i].details}</span>
                    </div>
                </a>
            </li>`
                    }
                    oUl.html(html);
                }
            })
            oUl.on("mouseover", "li", function(){
                //console.log("ojbk");
                $(this).find("a").find("p").stop().animate({
                    height: 0
                }, 500);
                $(this).find("a").find("div").css("display", "block");
            }).on("mouseout", "li", function(){
                $(this).find("a").find("p").stop().animate({
                    height: 40
                }, 500);
                $(this).find("a").find("div").css("display", "none");
            })

        })
    }
    return{
        youlike: youlike
    }
})