function showweatherDetails(event) {
  event.preventDefault(); // Prevent page reload

  const city = document.getElementById('city').value.trim();
  const apiKey = 'f8d963e748dbcc0bbf576c6fa70bde5a';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
