$(function(){
//ЗАВДАННЯ 5.3
	$("#home > div > nav > ul >").hover(function(){
		$(this).addClass("svitlo");
	}, function(){
		$(this).removeClass("svitlo");
	});
});