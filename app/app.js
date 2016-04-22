define(['jquery'], function ($) {
  function doSetUp(){
    $('#loginForm').submit(function(){
        $('#name').text("Piet");
        return false;
    });
  }

  $(document).ready(function() {
      doSetUp();
  });

});
