$(function(){
//ЗАВДАННЯ 6.8
	function size_obj(selectorObj){
		var name = $(selectorObj).attr("alt");
		var w = $(selectorObj).width();
		var h = $(selectorObj).height();
		$("#p").text("Об'єкт - "+name+". Його ширина = "+w+"px, висота = "+h+"px");
	}
	size_obj("#img_2");
});