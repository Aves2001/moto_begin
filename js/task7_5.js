$(function(){
//ЗАВДАННЯ 7.5
	function update(){
		$("#mytextarea").text("");
		var text1 = $("#motoSelect option:selected").text();
		var text2 = $("#daysSelect option:selected").text();
		var text3 = $("#email").val();
		var text4 = '';
		$('#format input[type="checkbox"]').filter(':checked').each(function() {
			if (!text4){
				text4 = '| '
			}
			var id = $(this).attr("id");
			text4 = text4 + $('#format label[for="'+id+'"]').text()+" | ";
		});
		var text5 = $("input:radio:checked").next().text();
		$("#mytextarea").append(text1+" на "+text2+" днів"+"\n"+text3+"\nАксесуари: "+text4+"\nСтраховка: "+text5);
	}
	$("#mytextarea").height(150);
	$("#mytextarea").prop("readonly", "true");
	$("#div_form_2").keydown(function(){update()});
	$("#div_form_2").click(function(){update()});
	$("#format").change(function(){update()});
	$("#radio").change(function(){update()});
});