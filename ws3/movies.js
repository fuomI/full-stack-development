// Import http, node-fetch  module
const http = require('http');
const fetch = require('node-fetch');

// Declare API url in variabl
const apiURL = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750"

let obj;

fetch(apiURL)
  .then(response => response.json())
  .then(data => obj = data)
  .then(() => console.log(obj));


