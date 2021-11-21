const Weather = ({ weather, countries }) => {
  if (countries.length === 1) {
    return (
      <div className="weather text-center container">
        <h2 className="title">Weather in {weather?.location.name}</h2>
        <div>
          <p>
            <strong>Temperature: </strong>
            {weather?.current.temperature}
            &deg; Celsius
          </p>
        </div>
        <div>
          <img
            className="img-thumbnail"
            src={weather?.current.weather_icons[0]}
            alt={weather?.current.weather_descriptions[0]}
          />
        </div>
        <div>
          <p>
            <strong>Wind:</strong> {weather?.current.wind_speed} mph, direction{" "}
            {weather?.current.wind_dir}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
