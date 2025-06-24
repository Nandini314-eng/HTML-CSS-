const apiKey = "5013ffde972d2a961e4a598d5376cd12";


async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    temperature.innerText = `${data.main.temp}°C`;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} m/s`;
  } catch (error) {
    alert("Error fetching weather data: " + error.message);
  }
}

function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const type = document.getElementById("conversionType").value;
  const result = document.getElementById("convertedResult");

  if (isNaN(temp)) {
    result.innerText = "Please enter a valid number.";
    return;
  }

  let converted;
  if (type === "CtoF") {
    converted = (temp * 9 / 5) + 32;
    result.innerText = `${temp}°C = ${converted.toFixed(2)}°F`;
  } else {
    converted = (temp - 32) * 5 / 9;
    result.innerText = `${temp}°F = ${converted.toFixed(2)}°C`;
  }
}

