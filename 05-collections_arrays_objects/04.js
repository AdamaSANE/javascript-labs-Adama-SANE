/**
 * Remember how you put the temperature converter functions to use when
 * converting a list of values? Well, now you will get to do the same for a
 * large object!
 *
 * Your challenge:
 *
 * 1. You'll find a huge JSON file in this folder it is an object that contains
 *    a large list of objects. Manually copy and paste the contents of that file
 *    below and start writing your script below that.
 * 2. Output to the console all the temperatures in Vancouver in Celsius,
 *    convert if needed.
 * 3. Output to the console all the temperatures in Jerusalem in Fahrenheit,
 *    convert if needed.
 * 4. Get the average temperatures for Vancouver and Jerusalem in both Celsius
 *    and Fahrenheit and output them to the console.
 * 5. Write a function that will return a chosen city's average temperature in
 *    either fahrenheit or celsius defined by two parameters as shown in the
 *    code below.
 *
 */

function fToC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function getConvertedTemperature(entry, targetScale) {
  if (targetScale === "C") {
    return entry.Scale === "Celsius"
      ? entry.Temperature
      : fToC(entry.Temperature);
  }

  return entry.Scale === "Fahrenheit"
    ? entry.Temperature
    : cToF(entry.Temperature);
}

function getAverageTemperature(entries, targetScale) {
  let total = 0;

  for (let i = 0; i < entries.length; i += 1) {
    total += getConvertedTemperature(entries[i], targetScale);
  }

  return total / entries.length;
}

(async function () {
  const response = await fetch("./weather.json");
  const weather = await response.json();
  const data = weather.data;

  let vancouverEntries = [];
  let jerusalemEntries = [];

  for (let i = 0; i < data.length; i += 1) {
    const entry = data[i];

    if (entry.City === "Vancouver") {
      vancouverEntries.push(entry);
      console.log(`${getConvertedTemperature(entry, "C")}C`);
    }

    if (entry.City === "Jerusalem") {
      jerusalemEntries.push(entry);
      console.log(`${getConvertedTemperature(entry, "F")}F`);
    }
  }

  const vancouverAverageC = getAverageTemperature(vancouverEntries, "C");
  const vancouverAverageF = getAverageTemperature(vancouverEntries, "F");
  const jerusalemAverageC = getAverageTemperature(jerusalemEntries, "C");
  const jerusalemAverageF = getAverageTemperature(jerusalemEntries, "F");

  console.log(
    `The average temperature in Vancouver in Celsius is ${vancouverAverageC}`,
  );
  console.log(
    `The average temperature in Vancouver in Fahrenheit is ${vancouverAverageF}`,
  );
  console.log(
    `The average temperature in Jerusalem in Celsius is ${jerusalemAverageC}`,
  );
  console.log(
    `The average temperature in Jerusalem in Fahrenheit is ${jerusalemAverageF}`,
  );

  function getAvgTemp(city, scale) {
    const cityEntries =
      city === "Vancouver" ? vancouverEntries : jerusalemEntries;
    return getAverageTemperature(cityEntries, scale);
  }

  let avgTempInCity = getAvgTemp("Vancouver", "C");
  console.log(avgTempInCity);
})().catch(function (error) {
  console.error("Unable to load weather data.", error);
});
