$(function(){
//ЗАВДАННЯ 5.2
	function t(method){
		return "<p class='fon_yellow'>Цей абзац доданий за допомогою методу " + method + "</p>";
	}
	$("#about-moto").before(t("before"));
	$("#about-moto").after(t("after"));
	$("#about-moto").prepend(t("prepend"));
	$("#about-moto").append(t("append"));
});