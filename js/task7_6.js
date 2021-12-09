$(function(){
//ЗАВДАННЯ 7.6
	function update(){
		if ($('input[name="inch"]:checked').val() == "yes"){
			$("#radio").css('background-color', '#f6f6f6');
		} else {
			$("#radio").css('background-color', 'red');
		}
	}
	update();
	$("#radio").change(function(){update()});
});