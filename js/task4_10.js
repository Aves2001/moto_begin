$(function(){
//ЗАВДАННЯ 4.10
	var blog_post  = $("#blog > div.blog-time-line > div.col-md-6.blog-time-line-right .blog-post");
	$("#mytextarea").height(150);
	$(blog_post).find(".col-md-2.blog-post-date").click(function(){
		var label = $(this).find("label").text();
		blog_post.each(function(){
			if ($(this).find(".col-md-2.blog-post-date").find("label").text() == label) {
				name = $(this).find("div.col-md-10.blog-post-info > h4 > a").text().trim();
				categorie = $(this).find(".col-md-10.blog-post-info .categorie").text().trim();
				$("#mytextarea").append(name + " " + categorie +"\n");
			}
		});
	});
});