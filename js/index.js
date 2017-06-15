window.onload = function() {
  //function has to 'build' equation based on the user's input
  var equation1 = "";
  var num = "";

  $("#9").on("click", function() {
    var num = "9";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#8").on("click", function() {
    var num = "8";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#7").on("click", function() {
    var num = "7";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#6").on("click", function() {
    var num = "6";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#5").on("click", function() {
    var num = "5";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#4").on("click", function() {
    var num = "4";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#3").on("click", function() {
    var num = "3";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#2").on("click", function() {
    var num = "2";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#1").on("click", function() {
    var num = "1";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#0").on("click", function() {
    var num = "0";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#15").on("click", function() {
    var num = ".";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  

  $("#11").on("click", function() {
    var num = "+";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#12").on("click", function() {
    var num = "-";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#13").on("click", function() {
    var num = "*";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });
  $("#14").on("click", function() {
    var num = "/";
    equation1 += num;
    document.getElementById("eq").innerHTML = equation1;
  });

  $("#21").on("click", function() {
    equation1 = "";
    document.getElementById("scr").innerHTML = 0;
    document.getElementById("eq").innerHTML = 0;
  });
  $("#20").on("click", function() {
    var result = 0;
    var equation2 = equation1.replace(/\++/g ,'+').replace(/\--/g ,'-').replace('//','/').replace('**','*').replace('..','.');
    result = eval(equation2);
    equation1= result;
    document.getElementById("scr").innerHTML = result;
    document.getElementById("eq").innerHTML = equation1;
  });
};

$( function () {
    var height_diff = $( window ).height() - $( 'body' ).height();
    if ( height_diff > 0 ) {
        $( 'footer' ).css( 'margin-top', height_diff );
    }
});