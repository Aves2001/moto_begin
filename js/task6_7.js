$(function(){
//ЗАВДАННЯ 6.7
	function change_width_b(selectorObj){
		if ($(selectorObj).attr("title") != 1){
				var w = $(selectorObj).width();
				var h = $(selectorObj).height();
				$(selectorObj).width(w*1.5).height(h*1.5);
				$(selectorObj).attr("title", "1");
			}
	}
	function change_width_s(selectorObj){
		if ($(selectorObj).attr("title") == 1){
				var w = $(selectorObj).width();
				var h = $(selectorObj).height();
				$(selectorObj).width(w/1.5).height(h/1.5);
				$(selectorObj).attr("title", "");
			}
	}
	$("img").hover(function(){
		change_width_b(this);
	}, function(){
		change_width_s(this);
	});
});