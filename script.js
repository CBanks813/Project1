$(document).ready(function(){

clickcounter = 0;
   $(".square").on("click", function(){
     clickcounter++
     console.log(clickcounter)
     // toggle class to show
     $(this).toggleClass("pick");
      });
var target = event.target

var checkMatch = function match() {
  // on match, toggle class to indicate match

}

    // if (clickcounter % 2 == 1) {
    //   console.log("working")
    //   $(this).show();
    // } else {
    //   $(this).hide();
    // }

});
 // $(".square").on("click", function(){
 // });





 $(".reset").on(function(){

})
