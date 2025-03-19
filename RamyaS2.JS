const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city);
});

function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert("City not found!");
            } else {
                displayWeatherData(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to fetch weather data.");
        });
}

function displayWeatherData(data) {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('weather-condition').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
