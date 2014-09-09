$(document).ready(function() {
  if ($(this).width() <= 767) {
    $('.navbar a').on('click', function(){
      if($( this ).hasClass( "dropdown-toggle" ) == false){
        $(".navbar-toggle").click();
      }
    });

    $( "#navbar_search_form" ).submit(function( event ) {
      $(".navbar-toggle").click();
    });
  }

  $(window).resize(function() {
    if ($(this).width() <= 767) {
      $('.navbar a').on('click', function(){
        if($( this ).hasClass( "dropdown-toggle" ) == false){
          $(".navbar-toggle").click();
        }
      });

      $( "#navbar_search_form" ).submit(function( event ) {
        $(".navbar-toggle").click();
      });
    }
  });
});
