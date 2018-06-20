$(document).ready(function() {
  // --- our code goes here ---
  console.log('ready');
  $("#btn").on('click', function()  {
 
    console.log($("#tweet-textarea").val(), $("#tweet-textarea").val().length);
    let aString = $("#tweet-textarea").val();
 
  });
  $("#tweet-textarea").on('input propertychange paste', function(){

    const $counter = $(".counter");
    const tweetContent = $(this).val();
    const charCount = Array.from(tweetContent).length;
    const charsRemaining = 140 - charCount;
    $counter.html(charsRemaining);
    var el = $counter[0];
    if(charsRemaining < 0){
      console.log("no more characters");
      el.style.color = "#FF0000";
      el.classList.add('.negative');
    }
    else{
      console.log("still characters");
      el.style.color = "#000000";
      el.classList.remove('.negative')
    }
  })
  $("article").bind("mouseover", function(){
    var element = $("article");
    //console.log(element);
    //console.log(element.classList);
    //element.style.filter += 'contrast(110%)';
    element.addClass('.tweet-mouseover');
    
    //element.classList.add('.tweet-mouseover');
  });

  $("article").bind("mouseout", function(){
    var element = $("article");
    //console.log(element);
    //element.classList.add('.tweet-mouseout');
  });

}); //end of document ready

 