$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat Jilla_Venkat<br/>" + 
      "><span class='caret'>$</span> skills: Python ,R ,Machine Learning, AI <br/> ^100" +
      "><span class='caret'>$</span> job: Data scientist at <a href='http://www.google.com/'>Girnar Software Pvt. Ltd.</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: Movies, travel<br/> ^300" +
      "><span class='caret'>$</span> alias: Jilla <br/>" +
      "><span class='caret'>$</span> Education : B.tech from JNTUH <br/>"/*
      // "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
