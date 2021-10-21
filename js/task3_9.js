$(function(){
//ЗАВДАННЯ 3.9
	$(".blog-post").hover(function(){
		$(this).find(".col-md-10.blog-post-info .categorie").fadeIn(1000);
	}, function(){
		$(this).find(".col-md-10.blog-post-info .categorie").fadeOut(1000);
	});
});