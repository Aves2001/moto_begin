$(function(){
//ЗАВДАННЯ 2.4
	var blog_post = $(".col-md-6.blog-time-line-right .blog-post");
	var h4 = $(blog_post).find("h4");
	
	$(h4).fadeOut(1500);
	$(blog_post).slideUp(2000);
	
	$(blog_post).slideDown(3000);
	$(h4).fadeIn(6000);
});