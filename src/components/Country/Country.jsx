import './Country.css'
const Country = ({country}) => {
  const {name, flags} = country;
  return (
    <div className='Country'>
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      
    </div>
  );
};

export default Country;