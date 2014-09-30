// this code makes sure the navbar slides up on mobile devices when you click on a link
$(document).ready(function() {
  $('.navbar a').on('click', function(){
    if ($( window ).width() <= 767) {
      if($( this ).is( ".dropdown-toggle, .navbar-brand" ) == false){
        $(".navbar-toggle").click();
      }
    }
  });

  $( "#navbar_search_form" ).submit(function( event ) {
    if ($( window ).width() <= 767) {
      $(".navbar-toggle").click();
    }
  });

  $(window).resize(function() {
    $('.navbar a').on('click', function(){
      if ($( window ).width() <= 767) {
        if($( this ).is( ".dropdown-toggle, .navbar-brand" ) == false){
          $(".navbar-toggle").click();
        }
      }
    });

    $( "#navbar_search_form" ).submit(function( event ) {
      if ($( window ).width() <= 767) {
        $(".navbar-toggle").click();
      }
    });
  });
});
