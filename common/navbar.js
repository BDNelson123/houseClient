// this code makes sure the navbar slides up on mobile devices when you click on a link
$(document).ready(function() {
  if ($(this).width() <= 767) {
    $('.navbar a').on('click', function(){
      if($( this ).is( ".dropdown-toggle, .navbar-brand" ) == false){
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
        if($( this ).is( ".dropdown-toggle, .navbar-brand" ) == false){
          $(".navbar-toggle").click();
        }
      });

      $( "#navbar_search_form" ).submit(function( event ) {
        $(".navbar-toggle").click();
      });
    }
  });
});
