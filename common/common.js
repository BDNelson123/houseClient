// ip address of rails api server
var server = "http://198.61.208.215:4000";
var client = "http://198.61.208.215";

// restrict access to logged in users
function restrict_access(location,token){
  if(!token) {
    location.path('/users/sign_in');
  }
}

// format date with leading 0
function date_format_0(date){
  date = date || '';
  if(date.charAt(0) == 0) {
    return date.charAt(1);
  } else {
    return date;
  }
}

// restrict access to users who can update themselves
function restrict_premission(location,root,id){
  if(!root || root != id) {
    location.path('/404').replace();
  }
}

// shows server validation errors
function api_errors(rejection){
  $( "#alert" ).fadeIn( "fast", function() {
    $( this ).html(rejection.data);
    $( "#alert" ).fadeOut( 5000 );
  });
}
