$(function(){
//ЗАВДАННЯ 6.3
	function change_width(selectorObj ,w){
		$(selectorObj).width(w).height(w);
	}
	
	change_width(".slide-btn", 100);
	change_width("img", 300);
	change_width("#img_1", 50);
});