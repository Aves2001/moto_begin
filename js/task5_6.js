$(function(){
//ЗАВДАННЯ 5.6
	$("#fea > div > div.features-grids.text-center img").click(function(){
		if ($("#koshik-wrapper").attr("class") != "koshik-wrapper full-koshik") {
			$("#koshik-wrapper").attr("class", "koshik-wrapper full-koshik");
		}
		var nomer = $(this).attr('nomer');
		var img = $(this).clone();
		$("#koshik-wrapper >").each(function(){
			if ($(this).attr('nomer') == nomer){
				$(this).append(img);
			}
		});
		$(this).remove();
	});
	
	$("#fea > div > div.features-grids.text-center").after('<div class="head text-center"><h3><span> </span>Кошик</h3></div><div id="koshik-wrapper" class=koshik-wrapper><div nomer="1" class="koshik-wrapper-items col-md-3"></div><div nomer="2" class="koshik-wrapper-items col-md-3"></div><div nomer="3" class="koshik-wrapper-items col-md-3"></div><div nomer="4" class="koshik-wrapper-items col-md-3"></div></div>');
});