$(function(){
//ЗАВДАННЯ 7.7
	function update(){
		if ($("#email").val().indexOf("Приклад: ") !== -1){
			$("#email").css('background-color', 'red');
		} else {
			$("#email").css('background-color', 'green');
		}
	}
	update();
	$("#email").keydown(function(){update()});
	$("#email").change(function(){update()});
});