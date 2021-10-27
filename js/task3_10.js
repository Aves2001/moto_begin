$(function(){
//ЗАВДАННЯ 3.10 
	var is_ua = true;
	$(".contatct-active.m6").click(function(){
		if (is_ua){
			$(".active.m1").find("a").text("Home");
			$(".page-scroll.m2").find("a").text("Motorcycles");
			$(".page-scroll.m3").find("a").text("Sale");
			$(".page-scroll.m4").find("a").text("Forum");
			$(".page-scroll.m5").find("a").text("Contacts");
			$(this).find("a").text("ua");
			is_ua = false;
		} else {
			$(".active.m1").find("a").text("Головна");
			$(".page-scroll.m2").find("a").text("Мотоцикли");
			$(".page-scroll.m3").find("a").text("Розпродаж");
			$(".page-scroll.m4").find("a").text("Форум");
			$(".page-scroll.m5").find("a").text("Контакти");
			$(this).find("a").text("eng");
			is_ua = true;
		}
	});
});