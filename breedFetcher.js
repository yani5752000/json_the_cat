const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    
    const data = JSON.parse(body);
    let desc;
    if (data[0] === undefined) {
      error = "no such breed";
      desc = null;
    } else {
      desc = data[0].description;
    }
    
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };