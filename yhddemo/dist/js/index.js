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
		})
	}
	return{
		index: index
	}
})