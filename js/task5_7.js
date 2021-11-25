$(function(){
//ЗАВДАННЯ 5.7
	function update(){
		if ($("#koshik-price").text() == ""){
			$("#koshik-wrapper").before("<p id='koshik-price' class='head text-center'></p>");
		}
		var count = 0;
		var summa = 0;
		
		$("#koshik-wrapper img").each(function(){
			count = count + 1;
			summa = parseInt($(this).attr("price")) + summa;
		});
		
		$("#koshik-price").html("Всього <b>"+count+"</b> мотоциклів на суму <b>"+summa+"</b> UAH");
	}
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
		update();
	});
	
	$("#fea > div > div.features-grids.text-center").after('<div class="head text-center"><h3><span> </span>Кошик</h3></div><div id="koshik-wrapper" class=koshik-wrapper><div nomer="1" class="koshik-wrapper-items col-md-3"></div><div nomer="2" class="koshik-wrapper-items col-md-3"></div><div nomer="3" class="koshik-wrapper-items col-md-3"></div><div nomer="4" class="koshik-wrapper-items col-md-3"></div></div>');
});