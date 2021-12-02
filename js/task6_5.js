$(function(){
//ЗАВДАННЯ 6.5
	$("img").each(function(){
		$(this).click(function(){
			if ($(this).attr("title") != 1){
				var w = $(this).width();
				var h = $(this).height();
				$(this).width(w/1.5).height(h/1.5);
				$(this).attr("title", "1");
			}
		});
		$(this).dblclick(function(){
			if ($(this).attr("title") == 1){
				var w = $(this).width();
				var h = $(this).height();
				$(this).width(w*1.5).height(h*1.5);
				$(this).attr("title", "");
			}
		});
	});
});