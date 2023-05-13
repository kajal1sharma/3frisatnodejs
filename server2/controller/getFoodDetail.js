const axios = require('axios');
async function func(){
const options = {
  method: 'GET',
  url: 'https://the-mexican-food-db.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '372e1be677mshb27e20e9a8d6ffbp116237jsn3d8a3869bb79',
    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

func();