import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
  const {name, flags, area, population, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited =() =>{
    setVisited(!visited);
  }
  return (
    <div className='Country'>
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country' : 'I want to visit'}
    </div>
  );
};

export default Country;