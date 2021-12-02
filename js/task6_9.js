$(function(){
//ЗАВДАННЯ 6.9
	function size_obj(selectorObj){
		var name = $(selectorObj).attr("alt");
		var src = $(selectorObj).attr("src");
		var w = $(selectorObj).width();
		var h = $(selectorObj).height();
		$("#p").html("Об'єкт - "+name+".<br>Адреса = "+src+"<br>Його ширина = "+w+"px, висота = "+h+"px");
	}
	size_obj("#img_2");
});