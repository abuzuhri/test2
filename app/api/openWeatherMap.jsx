var axios = require('axios');

const OPEN_WEATHER_MAP_URL_KEY='d462627d8f6e3f05296dd468d0c91205';
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid='+OPEN_WEATHER_MAP_URL_KEY;

//var openWeatherMap =
module.exports= {
  getTemp: function(location){
    var encodedlocation =encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedlocation}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res);
      if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }).catch(function (error){
      throw new Error('Error ');
    });
  }
}

//module.exports = openWeatherMap;
