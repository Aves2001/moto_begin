$(function(){
//ЗАВДАННЯ 2.8
	function zr(name_obj,t1,t2) {
		$(name_obj).slideUp(t1).slideDown(t2);
    }
	
	function prozor(name_obj, time, opacity) {
		var obj = $(name_obj);
		$(obj).fadeTo(time, opacity);
		$(obj).slideUp(time);
		$(obj).slideDown(time);
		$(obj).fadeTo(time, 1);
    }
	
	$("#home .container").slideUp(2000, function(){
		zr(this, 0, 1000);
		prozor(this, 2000, 0.5);
	});
});