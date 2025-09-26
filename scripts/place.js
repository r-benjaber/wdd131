const windSpeed = 12;
const temperature = 5;
const weatherInfo = document.querySelector("#weatherInfo");


const windChill = function (temperature, windSpeed) {
    if (windSpeed >= 4.8 && temperature <= 10) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }
    else {
        return "N/A";
    }
}

const windChillDecimal = windChill(temperature, windSpeed).toFixed(1);

weatherInfo.innerHTML = `Temperature: ${temperature}<br>
                         Wind Speed: ${windSpeed}<br>
                         Wind Chill: ${windChillDecimal}`;