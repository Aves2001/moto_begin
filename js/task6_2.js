$(function(){
//ЗАВДАННЯ 6.2
	function change_width(selectorObj ,w){
		$(selectorObj).width(w);
	}
	
	change_width(".slide-btn", 500);
	change_width("img", 300);
	change_width("#img_1", 50);
});