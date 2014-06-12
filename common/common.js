// ip address of rails api server
var server = "http://198.61.208.215:4000";

// restrict access to logged in users
function restrict_access(location,token){
  if(!token) {
    location.path('/users/sign_in');
  }
}

// shows server validation errors
function api_errors(rejection){
   var values = rejection.data;
   var flash = [];
   angular.forEach(values, function(value, key) {
     this.push('<p>' + key + ': ' + value + '</p>');
   }, flash);

  $( "#alert" ).fadeIn( "fast", function() {
    $( this ).html(flash);
  });
}