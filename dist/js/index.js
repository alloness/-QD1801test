define(["jquery", "jquery-cookie"], function($){
	var index = function(){
		$(function(){
			$(".index_topbanner").hover(function(){
				$("a")[0].style.display = "none";
				$("a")[1].style.display = "block";
			}, function(){
				$("a")[0].style.display = "block";
				$("a")[1].style.display = "none";
			})
			$.ajax({
				url:"../data/promo.json",
				// type:"GET",
				success:function(data){
					for(var i = 0; i < data.length; i++){
						$(".promo_wrapper").find("ul").find("li").eq(i).find("a").find("div").css("background-image", `url(http:${data[i].img})`)
					}
				}
			})
			$.ajax({
				url:"../data/color.json",
				success:function(res){
					for(var i = 0; i < res.length; i++){
						$(".promo_wrapper").find("ul").find("li").eq(i).css("background-color", `${res[i].color}`)
					}
				}
			})
			var oHour = $("#hour");
			var oMin = $("#min");
			var oSec = $("#sec");
			var i = 14400;
			var timer = null;

			timer = setInterval(function(){
				i--;
				oSec.html(doubleNum(i % 60));
				oMin.html(doubleNum(parseInt(i / 60) % 60));
				oHour.html(doubleNum(parseInt(i / 3600)));
			}, 1000);

			function doubleNum(num){
				if(num < 10){
					return "0" + num;
				}else{
					return num;
				}
			}
		})
	}
	return{
		index: index
	}
})