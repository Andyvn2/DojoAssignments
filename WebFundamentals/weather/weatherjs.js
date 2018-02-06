$(document).ready(function() {
    $('form').submit(function() {
    	var city=$("#city").val();

        // your code here (build up your url)
        $.get( "http://api.openweathermap.org/data/2.5/weather?q="+city+"&&units=imperial&appid=1153a62b988148b81d0c3121d688fca4", function(info) {
        	console.log(info);
        	$("#temp").html(" "+info.main.temp+" ");
        	$("#city1").html(" "+info.name+" ");
        	console.log(info.name)

        });

     return false;
    });
});


