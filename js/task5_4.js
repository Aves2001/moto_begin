$(function(){
//ЗАВДАННЯ 5.4
	$("#fea > div > div.features-grids.text-center img").click(function(){
		if ($("#koshik-wrapper").attr("class") != "koshik-wrapper full-koshik") {
			$("#koshik-wrapper").attr("class", "koshik-wrapper full-koshik");
		}
		$("#koshik-wrapper").prepend($(this).clone());
	});
	$("#fea > div > div.features-grids.text-center").after("<div class='head text-center'><h3><span> </span>Кошик</h3></div><div id='koshik-wrapper' class=koshik-wrapper></div>");
});