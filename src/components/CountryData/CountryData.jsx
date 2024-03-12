const CountryData = ({country, handleVisitedCountry}) => {
  console.log(country, handleVisitedCountry);
  return (
    <div>
      <p><small>Country Data: {country.name.common}</small></p>
    </div>
  );
};

export default CountryData;