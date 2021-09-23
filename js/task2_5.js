$(function(){
//ЗАВДАННЯ 2.5
	function zr(name_obj,t1,t2) {
		$(name_obj).slideUp(t1*1000).slideDown(t2*1000);
    }
	zr("#img_2", 1, 5);
	zr(".slide-btn", 1, 5);
});