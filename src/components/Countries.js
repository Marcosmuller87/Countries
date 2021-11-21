const Countries = ({ countries, handler }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (countries.length > 1 && countries.length < 10) {
    return countries.map((country) => (
      <div className="text-center container" key={country.numericCode}>
        <h4 className="country-name">{country.name}</h4>
        <button
          className="btn btn-primary btn-rounded"
          onClick={() => handler(country.name)}
        >
          Show
        </button>
      </div>
    ));
  } else if (countries.length === 1) {
    return countries.map((country) => (
      <div className="text-center container" key={country.numericCode}>
        <h1 className="title">{country.name}</h1>
        <img
          className="img-thumbnail"
          src={country.flag}
          alt="Flag-Img"
          width="200"
          height="150"
        />
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Currency:</strong> {country.currencies[0].code}
        </p>
        <p>
          <strong>Continent:</strong> {country.region}
        </p>
        <h4>Spoken Languages:</h4>
        <ul className="list-group">
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
    ));
  } else return null;
};

export default Countries;
