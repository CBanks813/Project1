$(document).ready(function(){
  var temp = []

  clickcounter = 0;
  $(".square").on("click", function(){
    clickcounter++
    // console.log(clickcounter)
    $(this).toggleClass("pick");
    temp.push($(this)[0].firstChild)
    // console.log(temp);
    if (clickcounter % 2 == 0) {
      checkMatch()
    }

  });
  function checkMatch() {
    // on match, toggle class to indicate match
    // var picked_images = $(".pick img");
    var first_picked = temp[0];
    //  console.log(first_picked);
    var second_picked = temp[1];
    // console.log("1st.src", first_picked.src);
    if (first_picked.src == second_picked.src) {
      // console.log("matched");
      //when images are matched keep displayed
      //class of match
    } else {
      //when images are not matched hide again.
      temp.forEach(logArrayElements)
    }

  }

  function logArrayElements(element) {
    console.log(element.classList);
  }
});

//






// $(".reset").on(function(){

// })
