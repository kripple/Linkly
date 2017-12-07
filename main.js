var display = new Vue({
  el: '#display',
  data: {
    convertedLink: '',
    linkVisible: false
  }
})

var input = new Vue({
  el: '#input',
  data: {
    link: '',
    convertLink: function() {
      display.convertedLink = input.link.toLowerCase();

      var latitude = input.link.match(new RegExp(/(lat=)(-)?\d+(.)\d+/g));
      var longitude = input.link.match(new RegExp(/(lon=)(-)?\d+(.)\d+/g));
     
      if(!(latitude && longitude)) return '';
    
      latitude = latitude[0].substring(4);
      longitude = longitude[0].substring(4);
      display.convertedLink = 'https://www.google.com/maps/place/' + latitude + ',' + longitude;

      display.linkVisible = true;
    }
  }
})
