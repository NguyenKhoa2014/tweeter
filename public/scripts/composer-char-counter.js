$(document).ready(function() {
  // --- our code goes here ---
  console.log('ready');
  $("#btn").on('click', function()  {
 
    console.log($("#tweet-textarea").val(), $("#tweet-textarea").val().length);
    let aString = $("#tweet-textarea").val();
    //let charCount = countingCharacters(aString);
    //$("#charCount").val() = charCount;
    //console.log(charCount);
  });
  $("#tweet-textarea").on('input propertychange paste', function(){
    //let aString = $("#tweet-textarea").val();
    //const MAX = 140;
    //let availChar = MAX - aString.length;
    //$("#tweet-textarea").html(availChar);
    const $counter = $(".counter");
    //var myCounter = document.getElementsByClassName('.counter')
    const tweetContent = $(this).val();
    const charCount = Array.from(tweetContent).length;
    const charsRemaining = 140 - charCount;
    $counter.html(charsRemaining);
    
    var el = $counter[0];
    if(charsRemaining < 0){
      console.log("no more characters");
      el.style.color = "#FF0000";
      el.classList.add('.negative')
       
       
    }
    else{
      console.log("still characters");
      el.style.color = "#000000";
      el.classList.remove('.negative')
    }
  })

});

function countingCharacters(input){
  const MAX = 140;
  let inputLength = input.length;
  return MAX - inputLength;
} 