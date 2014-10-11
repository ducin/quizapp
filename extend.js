#!/usr/bin/env node

if (process.argv.length < 4) {
  return console.log('Usage: ./extend.js "polPhrase" "engPhrase"');
}

var filePath = 'app/scripts/data/eng.json',
  polPhrase = process.argv[2],
  engPhrase = process.argv[3];
var question = {
  pol: polPhrase,
  eng: engPhrase
};
console.log('Adding:', question);

fs = require('fs');
fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var json = JSON.parse(data);
  json.questions.push(question);
  fs.writeFile(filePath, JSON.stringify(json), function(err) {
    if(err) {
      return console.log(err);
    } else {
      console.log("File " + filePath + " updated successfully!");
    }
  }); 
});

