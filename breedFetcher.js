const request = require('request');
const breed = (process.argv)[2];


let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {

  if (error) {
    console.log('error:', error);
  }
  

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log("No such breed found");
    return;
  }

  console.log(data[0].description);
});