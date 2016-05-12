define(['jquery'], function ($) {
  function doSetUp(){
    $('#loginForm').submit(function(){
        $('#name').text("Piet");
        console.log($('#nameField').value);
        return false;
    });
  }

  $(document).ready(function() {
      doSetUp();
  });

});
