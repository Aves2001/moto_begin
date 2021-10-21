$(function(){
//ЗАВДАННЯ 3.5
	var header = $(".header");
	var find = ".slide-text";
	var x = true;
	header.mouseenter(function(){
		if (x){
			x = false;
			$(this).find(find).slideUp(3000, function(){x=true});
		}
	});
	
	header.mouseleave(function(){
		$(this).find(find).slideDown(3000);
	});
});