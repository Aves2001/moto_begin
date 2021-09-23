$(function(){
//ЗАВДАННЯ 2.6
	function prozor(name_obj, time, opacity)  {
		var obj = $(name_obj);
		var time_s = time * 1000;
		$(obj).fadeTo(time_s, opacity);
		$(obj).slideUp(time_s);
		$(obj).slideDown(time_s);
		$(obj).fadeTo(time_s, 1);
    }
	
	prozor("#img_2", 2, 0.5);
	prozor(".slide-btn", 2, 0.2);
	prozor("h1", 2, 0.7);
});