$(function(){
//ЗАВДАННЯ 2.5
	function zr(name_obj,t1,t2) {
		$(name_obj).slideUp(t1).slideDown(t2);
    }
	zr("#img_2", 1000, 5000);
	zr(".slide-btn", 1000, 5000);
});