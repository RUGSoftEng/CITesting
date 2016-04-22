define(['jquery'], function ($) {
  function doSetUp(){
    $('#loginForm').submit(function(){
        console.log('submit!');
    });
  }

  $(document).ready(function() {
      doSetUp();
  });

});
