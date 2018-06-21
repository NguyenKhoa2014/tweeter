/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 
 
$(document).ready(function(){
  loadTweets();
  $(".new-tweet").slideToggle();
  
  function createTweetElement(tweetObj){ 
   let aTweet = tweetObj;
        let name = aTweet['user'].name;
        let avatar = aTweet['user']['avatars'].small;
        let handle = aTweet['user'].handle;
        let createdDateMilli = aTweet['created_at'] / 86400000000;
        let createDate = Math.round(createdDateMilli);  
        let Obj = {
          name: name,
          avatar: avatar,
          handle: handle,
          createDate: createDate,
          tweet: aTweet.content.text
        } 
        let myHTMLObject = createHTMLObject(Obj)
        $('#all-tweets').prepend(myHTMLObject);
  }

  function createHTMLObject(inputObj){
    const safetweet = escape(inputObj.tweet);
    let HTMLObj =  `
    <article>
      <header class="tweet header">
      <div class="user-image-group">
        <img  class="userimg" src="${inputObj.avatar}"  alt="user image"/>
        <span name="username" class="username">${inputObj.name}</span>
      </div>
      <div name="userid" class="userid">${inputObj.handle}</div>
      </header>
      
      <p class="tweet message">${safetweet} </p>
      <footer class="tweet footer"> 
      <p class="days">${inputObj.createDate} days ago</p>
      <div class="icons">
        <span class="glyphicon glyphicon-flag"></span>
        <span class="glyphicon glyphicon-retweet"></span>
        <span class="glyphicon glyphicon-heart"></span>
      </div>
    </footer>
    </article>
    `
    return HTMLObj;
  }
  
  function renderTweets(tweets) {
      for( let item in tweets){
        createTweetElement(tweets[item]);
      }
  }

  function formValidation(formData){
    console.log('formData.text: ',formData.text);
    let valid = false;
    if (formData.length === 5){
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  }

  function loadTweets(){
    $.ajax('/tweets').done(function(data){
      $('#all-tweets').html('');
      renderTweets(data);
    })
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    // Get the data from the form
    let data = $('form').serialize();
    console.log('what is data before if: ',data);
    let valid = formValidation(data);
     
    if (valid){
      // Make a AJAX POST request using that data
      $.ajax('/tweets', {
        method: 'POST',
        data: data
      }).done(function(data) {
        loadTweets();
      //clear data from input form   
      $('form textarea').val('');
    })      
    } else {
      $('#alert').addClass('display');
      $('#alert').html('Invalid input. Please enter data');
      $('#tweet-textarea').on('keypress', function(){
        $('#alert').removeClass('display');
      })
    }
  });

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  $('#compose').click(function(){
    $(".new-tweet").slideToggle();
    $("#tweet-textarea").focus();
});
  
})
 
 

