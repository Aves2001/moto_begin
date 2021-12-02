$(function(){
//ЗАВДАННЯ 6.6
	function change_width_b(selectorObj){
		if ($(selectorObj).attr("title") == 1){
				var w = $(selectorObj).width();
				$(selectorObj).width(w*2);
				$(selectorObj).attr("title", "");
			}
	}
	function change_width_s(selectorObj){
		if ($(selectorObj).attr("title") != 1){
				var w = $(selectorObj).width();
				$(selectorObj).width(w/2);
				$(selectorObj).attr("title", "1");
			}
	}
	$("img").hover(function(){
		change_width_s(this);
	}, function(){
		change_width_b(this);
	});
});