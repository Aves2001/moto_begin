$(function(){
//ЗАВДАННЯ 7.2
	var newSize = $(":header:last").css("fontSize");
	newSize = parseInt(newSize)*4;
	$(":header:last").css("fontSize", newSize);
});