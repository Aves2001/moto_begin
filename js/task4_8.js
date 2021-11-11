$(function(){
//ЗАВДАННЯ 4.8
	var x  = $("#fea > div > div.features-grids.text-center >");
	var text = "<i>Ви обрали:</i>"
	
	$(x).find("img[src*=moto]").click(function(){
		src = $(this).attr("src");
		x.each(function(){
			if ($(this).find("img").attr("src") == src) {
				var h3a = $(this).find("h3 a");
				if ($(h3a).text().indexOf(text) == -1) {
					tmp = $(h3a).html();
					$(h3a).html(text + "<br><br>" + tmp);
				}
			}
		});
	});
});