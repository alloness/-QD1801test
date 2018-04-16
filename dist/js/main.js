console.log("载入成功");

// 配置路径
require.config({
	paths: {
		jquery: "jquery-1.10.1.min",
		"jquery-cookie": "jquery.cookie",
		index : "index",
		firstmove: "firstmove",
		seckillmove: "seckillmove",
		prism:"prism",
		hdsearch: "hdsearch",
		youlike: "youlike",
		regist:"regist",
		shoplist: "shoplist",
		magnifying: "magnifying"
	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		/*
			js文件，声明不遵从AMD规范的js文件
		*/

	}
})

require(["index"], function(index){
	index.index();
})
require(["firstmove"], function(firstmove){
	firstmove.firstmove();
})
require(["seckillmove"], function(seckillmove){
	seckillmove.seckillmove();
})
require(["prism"], function(prism){
	prism.prism();
})
require(["hdsearch"], function(hdsearch){
	hdsearch.hdsearch();
})
require(["youlike"], function(youlike){
	youlike.youlike();
})
require(["regist"], function(regist){
	regist.regist();
})
require(["shoplist"], function(shoplist){
	shoplist.shoplist();
})
require(["magnifying"], function(magnifying){
	magnifying.magnifying();
})



























