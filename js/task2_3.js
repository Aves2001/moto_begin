$(function(){
//ЗАВДАННЯ 2.3
	function slideUpDown(clas) {
		$("."+clas).slideUp(2000).slideDown(1000);
    }
	slideUpDown("features");
	slideUpDown("work");
	slideUpDown("blog");
	slideUpDown("testmonials");
});