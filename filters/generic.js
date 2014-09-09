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

house.filter('timeStamp', function() {
  return function(text) {
    var timestamp = text.toString().substring( 0, 8 );
    var date = new Date( parseInt( timestamp, 16 ) * 1000 );
    return date.getMonth() + "-" + date.getDay() + "-" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes();
  };
});
