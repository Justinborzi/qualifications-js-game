var JSLib = require('./lib/app.js');

// Gets NPM Packages then finds the github.
JSLib.getLib("browserify").then((val) => {
    console.log(val);
    document.getElementById("package-name").innerHTML = val.libName;
    document.getElementById("proj-url").innerHTML = val.libName;
    document.getElementById("proj-url").setAttribute('href', val.url);
});

// TODO: Create Scoring System
