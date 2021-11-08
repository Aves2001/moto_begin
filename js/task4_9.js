$(function(){
//ЗАВДАННЯ 4.9
	var blog_post  = $("#blog > div.blog-time-line > div.col-md-6.blog-time-line-right .blog-post");
	var text = "Бажаєте замовити? ";
	var categorie;
	
	$(blog_post).find(".col-md-2.blog-post-date").hover(function(){
		var label = $(this).find("label").text();
		blog_post.each(function(){
			if ($(this).find(".col-md-2.blog-post-date").find("label").text() == label) {
				categorie = $(this).find(".col-md-10.blog-post-info .categorie");
				if ($(categorie).text().indexOf(text) == -1){
					$(categorie).prepend(text);
				}
				$(categorie).fadeIn(1000);
			}
		});
	}, function(){
		$(categorie).fadeOut(1000);
	});
});