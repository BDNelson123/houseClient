house.filter('notAvailable', function() {
  return function(text) {
    if(text) {
      return text;
    } else {
      return 'N/A'
    }
  };
});

house.filter('dateFormat', function() {
  return function(text) {
    text = text || '';
    text = text.split("T");
    text = text[0].split("-");
    return date_format_0(text[1]) + '-' + date_format_0(text[2]) + '-' + text[0];
  };
});
