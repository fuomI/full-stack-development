// Import node-fetch module
const fetch = require('node-fetch');

// Declare API url in variabl
const apiURL = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750"

// Object to hold json data
let json = {};
// GET -request as default
fetch(apiURL)
    // Parse response
  .then(response => response.json())
   // Display data in console (object)
  .then(data => saveDataToVariable(data));

function saveDataToVariable(data) {
    json = data;
    console.log(json);
}

