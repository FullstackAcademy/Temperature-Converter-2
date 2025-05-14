function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const temp = convertToCelsius(fahrenheit);
  if (temp < 0) {
    return "It's very cold";
  }
  if (temp < 20) {
    return "It's cold";
  }
  if (temp < 30) {
    return "It's warm";
  }
  if (temp < 40) {
    return "It's hot";
  }
  if (temp >= 40) {
    return "It's very hot";
  }
}
document.getElementById("submitBtn").addEventListener("click", function () {
  const input = document.getElementById("tempInput").value;
  const fahrenheit = parseFloat(input);

  if (isNaN(fahrenheit)) {
    alert("Please enter a number.");
    return;
  }

  const celsius = convertToCelsius(fahrenheit);
  const description = describeTemperature(fahrenheit);

  alert(
    `Fahrenheit: ${fahrenheit}°F\nCelsius: ${celsius.toFixed(
      2
    )}°C\nDescription: ${description}`
  );
});
