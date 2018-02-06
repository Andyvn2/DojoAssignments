$(document).ready(function() {
    $('form').submit(function() {
    	var city=$("#city").val();

        // your code here (build up your url)
        $.get( "http://api.openweathermap.org/data/2.5/weather?q=london,uk&&appid=1153a62b988148b81d0c3121d688fca4", function(info) {
        	console.log(info);
        })
        // 	function findinfo(object){
        // 		$("#info").html(" ");
        // 		var temp=" ";

        // 	}
        //     // your code here
        // }, 'json');
        // // don't forget to return false so the page doesn't refresh
     return false;
    });
});


