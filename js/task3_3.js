$(function(){
//ЗАВДАННЯ 3.3
	var x = $(".features .features-grids.text-center");
	x.click(function(){
		x.find("img[src*=moto]").slideToggle(2000);
	});
});