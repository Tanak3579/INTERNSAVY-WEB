document.addEventListener('DOMContentLoaded', function() {
  const countriesWeather = {
    USA: { temperature: '20°C', description: 'Sunny', humidity: '70%', windSpeed: '5 m/s' },
    UK: { temperature: '15°C', description: 'Cloudy', humidity: '80%', windSpeed: '6 m/s' },
    France: { temperature: '25°C', description: 'Partly cloudy', humidity: '60%', windSpeed: '4 m/s' },
    Germany: { temperature: '18°C', description: 'Rainy', humidity: '75%', windSpeed: '4 m/s' },
    Japan: { temperature: '22°C', description: 'Clear sky', humidity: '65%', windSpeed: '7 m/s' },
    Australia: { temperature: '30°C', description: 'Hot', humidity: '50%', windSpeed: '8 m/s' },
    Canada: { temperature: '10°C', description: 'Foggy', humidity: '85%', windSpeed: '3 m/s' },
    Brazil: { temperature: '28°C', description: 'Warm', humidity: '55%', windSpeed: '6 m/s' },
    China: { temperature: '24°C', description: 'Misty', humidity: '68%', windSpeed: '5 m/s' },
    India: { temperature: '32°C', description: 'Humid', humidity: '75%', windSpeed: '7 m/s' }
  };

  function getWeather() {
    const countryInput = document.getElementById('country-input').value.trim();
    const weatherInfo = document.getElementById('weather-info');

    if (countriesWeather.hasOwnProperty(countryInput)) {
      const countryWeather = countriesWeather[countryInput];
      const weatherHtml = `
        <h2>${countryInput}</h2>
        <p>Temperature: ${countryWeather.temperature}</p>
        <p>Description: ${countryWeather.description}</p>
        <p>Humidity: ${countryWeather.humidity}</p>
        <p>Wind Speed: ${countryWeather.windSpeed}</p>
      `;
      weatherInfo.innerHTML = weatherHtml;
    } else {
      weatherInfo.innerHTML = '<p>Weather information not available for this country.</p>';
    }
  }

  document.getElementById('get-weather-button').addEventListener('click', getWeather);
});
