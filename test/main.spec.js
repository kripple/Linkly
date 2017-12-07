var convertLink = function(link) {
  return link;
}

///////////////////////////////// TEST RUNNER /////////////////////////////////

var reasonableInputs = [
  {
    input: 'https://ny-longisland.pogoalerts.net/?lat=40.7594127422&lon=-73.1211761258&enc_id=7012680053239782204&zoom=16',
    expected: 'https://www.google.com/maps/place/40.7594127422,-73.1211761258'
  },
  {
    input: 'https://md-baltimore.pogoalerts.net/?lat=39.4875273139&lon=-76.6228140283&enc_id=3246119668533750545&zoom=16',
    expected: 'https://www.google.com/maps/place/39.4875273139,-76.6228140283'
  }
];
var badInputs = [
  '',
  'https://google.com',
  'not a url'
];


