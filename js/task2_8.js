$(function(){
//ЗАВДАННЯ 2.8
	function zr(name_obj,t1,t2) {
		$(name_obj).slideUp(t1*1000).slideDown(t2*1000);
    }
	
	function prozor(name_obj, time, opacity)  {
		var obj = $(name_obj);
		var time_s = time * 1000;
		$(obj).fadeTo(time_s, opacity);
		$(obj).slideUp(time_s);
		$(obj).slideDown(time_s);
		$(obj).fadeTo(time_s, 1);
    }
	
	$("#home .container").slideUp(2000, function(){
		zr(this, 0, 2);
		prozor(this, 2, 0.5);
	});
});