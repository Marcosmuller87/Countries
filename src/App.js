import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Weather from "./components/Weather";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [find, setFind] = useState("");
  const [weather, setWeather] = useState(null);

  // Getting the data from restcountries
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      if (find.length > 0) {
        setCountries(
          response.data.filter((country) =>
            country.name.toLowerCase().includes(find.toLowerCase())
          )
        );
      }
    });
  }, [find]);

  // Getting the data from weatherstack
  useEffect(() => {
    if (countries.length === 1) {
      const capital = countries[0].capital;
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
        )
        .then((response) => {
          console.log(response);
          setWeather(response.data);
        });
    }
  }, [countries]);

  // Handlers
  const handleFind = (e) => {
    setFind(e.target.value);
  };

  const handleClick = (e) => {
    setFind(e);
  };

  // App render
  return (
    <div className="main text-center container-fluid">
      <div className="row">
        <h1 className="title">Country Data App</h1>
        <h5>
          Search the country you want to know about and see the info and his
          capital weather in real time
        </h5>
        <form action="">
          <div className="form form-group">
            <label htmlFor="countries">Find Countries</label>
            <input
              id="countries"
              onChange={handleFind}
              value={find}
              type="text"
              className="form-control"
            />
          </div>
        </form>
        <Countries countries={countries} handler={handleClick} />
        <Weather weather={weather} countries={countries} />
        <div>
          Powered by <strong className="apis">REST Countries</strong> &{" "}
          <strong className="apis">Weatherstack</strong>
        </div>
      </div>
    </div>
  );
};

export default App;
