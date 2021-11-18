const qs = require('qs');
var client_id = 'client id'; // Your client id
var client_secret = 'client secret'; // Your secret
const axios = require('axios');

 getAuth = async () => {
  const BASE64_ENCODED_AUTH_CODE = new Buffer.from(client_id + ':' + client_secret).toString('base64');
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${BASE64_ENCODED_AUTH_CODE}`
    }
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};


module.exports = { getAuth }

  
