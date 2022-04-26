//a31ab111742e4439bb0db75b40cec2ff
import HttpClient from '../utils/HttpClient';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=a31ab111742e4439bb0db75b40cec2ff&units=metric';

class WeatherApp {
  constructor() {
    this.httpClient = new HttpClient(OPEN_WEATHER_MAP_URL);
  }

  async getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    //var requestUrl = `&q=${encodedLocation}`;
     
    return this.httpClient.get(`&q=${encodedLocation}`)
  }
};

export default new WeatherApp();
