const axios = require('axios');

const getHome = (req, res) => {
  res.render('index', {
    city: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    windSpeed: undefined,
    icon: undefined
  });
};

const getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.render('error', { message: 'City name is required!' });
  }

  const apiKey = process.env.API_KEY;
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(weatherUrl);
    const weatherData = response.data;

    res.render('index', {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      // windSpeed: windS,
      windSpeed: weatherData.wind.speed,
      icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    });
  } catch (error) {
    res.render('error', { message: 'City not found or API request failed.' });
  }
};

module.exports = {
  getHome,
  getWeather
};
