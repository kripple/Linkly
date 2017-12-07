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
      display.linkVisible = true;
    }
  }
})