const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character/77');
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
