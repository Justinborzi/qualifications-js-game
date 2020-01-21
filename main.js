var JSLib = require('./lib/app.js');
const request = require('request');

//npm install request@2.81.0

request('https://random-word-api.herokuapp.com/word?key=KJ2E33RA&number=1', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});

// Gets NPM Packages then finds the github.
JSLib.getLib("browserify").then((val) => {
    console.log(val);
    document.getElementById("package-name").innerHTML = val.libName;
    document.getElementById("proj-url").innerHTML = val.libName;
    document.getElementById("proj-url").setAttribute('href', val.url);
});

// TODO: Create Scoring System
