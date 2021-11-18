const axios = require('axios');
const getAuthLib = require('../config/spotify-config');

searchItems = async (req,res)=> {
    let items ;
    try {
      items = await getSearchedItems(req.body.searchString, req.body.limit, req.body.type);
      res.json({data: items.data});
    }
    catch(e){
      console.log(e)
    }
}
searchTypes = (req,res)=>{
    res.json({data:["album",
    "artist",
    "playlist",
    "track",
    "show",
    "episode"]})
  }
async function getSearchedItems(searchString, limit, type){
    const bearer = await getAuthLib.getAuth();
       console.log('bearer', bearer)
      var authOptions = {
        headers: {
          'Authorization': 'Bearer ' +bearer,
          'Content-Type': 'application/json'
        }
      };
      try{
       const response =  await axios.get(`https://api.spotify.com/v1/search?q=name:${searchString}&type=${type}&limit=${limit}`,authOptions)
        return response;
      }catch(err){
        console.log(err)
      }
   
    }

    module.exports = { searchItems, searchTypes}