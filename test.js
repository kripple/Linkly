var convertLink = function(link) {
  var latitude = link.match(new RegExp(/(lat=)(-)?\d+(.)\d+/g));
  var longitude = link.match(new RegExp(/(lon=)(-)?\d+(.)\d+/g));
 
  if(!(latitude && longitude)) return '';

  latitude = latitude[0].substring(4);
  longitude = longitude[0].substring(4);
  return 'https://www.google.com/maps/place/' + latitude + ',' + longitude;
}

///////////////////////////////// TEST RUNNER /////////////////////////////////

var testCases = [
  {
    input: 'https://ny-longisland.pogoalerts.net/?lat=40.7594127422&lon=-73.1211761258&enc_id=7012680053239782204&zoom=16',
    expected: 'https://www.google.com/maps/place/40.7594127422,-73.1211761258'
  }, {
    input: 'https://md-baltimore.pogoalerts.net/?lat=39.4875273139&lon=-76.6228140283&enc_id=3246119668533750545&zoom=16',
    expected: 'https://www.google.com/maps/place/39.4875273139,-76.6228140283'
  }, {
    input: '',
    expected: ''
  }, {
    input: 'https://google.com',
    expected: ''
  }, {
    input: 'not a url',
    expected: ''
  }
];

console.log('\n\nTest Results:\n');
testCases.forEach((testCase, index) => {
  var testPassed = testCase.expected === convertLink(testCase.input);
  var testResults = testPassed ? 'PASS' : 'FAIL';
  console.log((index + 1).toString() + '. ' + testResults);
});
console.log('\n');
