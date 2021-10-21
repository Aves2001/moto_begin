$(function(){
//ЗАВДАННЯ 3.4
function f(el){
	if ($(el).css("opacity") == 1){
		$(el).fadeTo(2000,0.0001);
	}
	else {
		$(el).fadeTo(2000,1);
	}
}
	$("img").click(function(){
		f(this);
	});
});