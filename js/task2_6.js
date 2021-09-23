$(function(){
//ЗАВДАННЯ 2.6
	function prozor(name_obj, time, opacity) {
		var obj = $(name_obj);
		time *= 1000;
		$(obj).fadeTo(time, opacity);
		$(obj).slideUp(time);
		$(obj).slideDown(time);
		$(obj).fadeTo(time, 1);
    }
	
	prozor("#img_2", 2, 0.5);
	prozor(".slide-btn", 2, 0.2);
	prozor("h1", 2, 0.7);
});