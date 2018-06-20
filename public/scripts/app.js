/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  function createTweetElement(tweetObj){
    console.log(tweetObj.text) ;
     
   return tweetObj.text;
  }

  function createHTMLObject(inputObj){
    console.log(inputObj);
    let HTMLObj =  `
    <article>
      <header class="tweet header">
      <div class="user-image-group">
        <img  class="userimg" src="${inputObj.avatar}"  alt="user image"/>
        <span name="username" class="username">${inputObj.name}</span>
      </div>
      <div name="userid" class="userid">${inputObj.handle}</div>
      </header>
      <p class="tweet message">${inputObj.tweet} </p>
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
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      //console.log(tweets);
      for( let item in tweets){
         
        let aTweet = tweets[item];
        let name = aTweet['user'].name;
        let avatar = aTweet['user']['avatars'].small;
        let handle = aTweet['user'].handle;
        //let createDate = aTweet['created_at'];
        let createdDateMilli = aTweet['created_at'] / 86400000000;
        let createDate = Math.round(createdDateMilli);  
        let $tweet = createTweetElement(aTweet['content']);
        let Obj = {
          name: name,
          avatar: avatar,
          handle: handle,
          createDate: createDate,
          tweet: $tweet
        }
        let myHTMLObject = createHTMLObject(Obj)
        console.log(myHTMLObject)
        //$('.message').append($tweet + "<br/>");
        $('#all-tweets').append(myHTMLObject);
      }
      

  }
  renderTweets(data);
  //var $tweet = createTweetElement(tweetData);
  //console.log($tweet); // to see what it looks like
   
  //console.log('message class is: ', $('.message'));
  //$('.message').text($tweet);
 // renderTweets(data);
 // $('.message').append($tweet);

})
 
 

