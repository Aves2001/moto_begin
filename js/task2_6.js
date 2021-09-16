$(function(){
//ЗАВДАННЯ 2.6
	function prozor(name_obj, time, opacity)  {
		var obj = $(name_obj);
		$(obj).fadeTo(time, opacity);
		$(obj).slideUp(time);
		$(obj).slideDown(time);
		$(obj).fadeTo(time, 1);
    }
	
	prozor("#img_2", 2000, 0.5);
	prozor(".slide-btn", 2000, 0.2);
	prozor("h1", 2000, 0.7);
});