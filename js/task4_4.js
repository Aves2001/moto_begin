$(function(){
//ЗАВДАННЯ 4.4
	$("img[src*=moto]").click(function(){
		alert($(this).attr("src"));
	});
});