$(document).ready(function(){


  $('form').submit(function(){
    var firstname = $("#1name").val();
    var lastname = $("#2name").val();
    var email = $("#3name").val();
    var contact = $("#4name").val();
    var data= "<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+email+"</td><td>"+contact+"</td></tr>";
    $("table tbody").append(data);
    return false;

  });
});
