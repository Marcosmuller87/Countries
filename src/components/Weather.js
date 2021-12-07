const Weather = ({ weather, countries }) => {
  if (countries.length === 1) {
    return (
      <div className="weather text-center container-fluid">
        <h2 className="title">Weather in {weather?.name}</h2>
        <div className="row">
          <div className="col">
            <p>
              <strong>Temperature: </strong>
              {weather?.main.temp}
              &deg; Celsius
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Feels Like: </strong>
              {weather?.main.feels_like}
              &deg; Celsius
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <strong>Pressure: </strong>
              {weather?.main.pressure}
              &nbsp; hPa
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Humidity: </strong>
              {weather?.main.humidity}%
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <strong>Cloudiness: </strong>
              {weather?.clouds?.all}%
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Wind:</strong> {weather?.wind.speed} mph
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <strong>Sunrise:</strong>{" "}
              {window.moment(weather?.sys.sunrise * 1000).format("HH:mm a")}{" "}
              (BRT)
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Sunset:</strong>{" "}
              {window.moment(weather?.sys.sunset * 1000).format("HH:mm a") ||
                "N/A"}{" "}
              (BRT)
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
