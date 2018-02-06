$(document).ready(function(){
	$("img").click(function(){
		var id = $(this).attr("id");

		$.get('https://anapioficeandfire.com/api/houses/'+id+'/',function(info){
			console.log(info);
			function findinfo(object){
				$('#titles').html('');
				var temp=" ";
				for (var i=0; i<info.titles.length; i++){
					temp=info.titles[i];
					console.log(temp);
					$("#titles").append(" "+temp+" ");
				}
				return temp;
			}
			findinfo(info);
			console.log(info.words);
			console.log(info.titles[0]);
			$("#name").html(" "+info.name+" ");
			$("#words").html(" "+info.words+" ");

		})
	})
})