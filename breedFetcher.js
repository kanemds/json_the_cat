const request = require('request');

// const cat = () => {
//   request(`https://api.thecatapi.com/v1/breeds/search/?q=${list}`, (error, response, body) => {
//     // error and response or response and body
//     // since if it was error there will no body.
//     // console.log(typeof body);
//     // if (error) {
//     //   throw error;
//     // }
//     const data = JSON.parse(body);
//     // if (list !== data[0].name) {
//     //   console.log(`Sorry, the content is not in the list`);
//     // } else {
//     console.log(data[0].description);
//   });
//   // });
// };

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

module.exports = { fetchBreedDescription };