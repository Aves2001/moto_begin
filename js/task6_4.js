$(function(){
//ЗАВДАННЯ 6.4
	function change_width(selectorObj){
		$(selectorObj).each(function(){
			var w = $(this).width();
			var h = $(this).height();
			$(this).width(w/2).height(h/2);
		});
	}
	change_width(".slide-btn");
	change_width("img");
	change_width("#bigform");
});