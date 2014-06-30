house.filter('notAvailable', function() {
  return function(text) {
    if(text) {
      return text;
    } else {
      return 'N/A'
    }
  };
});
