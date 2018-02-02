$(document).ready(function(){
  $("submit").click(function(){
    var firstname=$("#1name").val();
    var lastname=$("#2name").val();
    var description=$("#3name").val();
    $('#contactcards').append('<div class="card"><h1'+ firstname+lastname +'</h1> <p class="descriptionback">'+ description+'</p>  ');
    return false;
  });
    $('#contactcards').on('click', '.card', function(){
        $(.this).children().toggle();
});
