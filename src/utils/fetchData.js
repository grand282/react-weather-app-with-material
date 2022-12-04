const API_KEY = "857f0d3c5b6a94483bf9432de2772115";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const fetchData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    timezone,
    coord:{lat, lon},
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg },
    sys: { country },
    clouds:{all},
    name,
  } = data;

  const { description, icon, main } = weather[0];
  

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    deg,
    all,
    main,
    timezone,
    lat,
    lon,
  };
};

export { fetchData };
