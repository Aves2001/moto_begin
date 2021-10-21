$(function(){
//ЗАВДАННЯ 3.2
	var x = $(".features .features-grids.text-center");
	x.click(function(){
		x.find("img[src*=moto]").slideUp(3000);
	});
});