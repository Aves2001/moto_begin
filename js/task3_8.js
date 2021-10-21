$(function(){
//ЗАВДАННЯ 3.8
	var img_moto = $(".features-grids img[src*=moto]");
	var p = $("#p");

	p.click(function(){
		img_moto.slideToggle(2000, function(){
			if (img_moto.is(":visible")){
				p.text("Сховати фото");
			} else {
				p.text("Подивитись фото");
			}
		});
	});
});