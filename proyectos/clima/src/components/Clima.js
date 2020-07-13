import React from 'react';

const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  if (!name) {
    return null;
  }

  const convertKelvinToCelcius = (value) => {
    // grados kelvin
    const kelvin = 273.15;
    const result = parseFloat(value - kelvin).toFixed(2);
    return result;
  };

  return (
    <div>
      <div className='card-panel white col s12'>
        <div className='black-text'>
          <h2>El clima de {name}</h2>
          <div className='temperatura'>
            {/* {parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span> */}
            {convertKelvinToCelcius(main.temp)} <span>&#x2103;</span>
          </div>
          <div className='p'>
            Temperatura máxima: {convertKelvinToCelcius(main.temp_max)}{' '}
            <span>&#x2103;</span>
          </div>
          <div className='p'>
            Temperatura mínima: {convertKelvinToCelcius(main.temp_min)}{' '}
            <span>&#x2103;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clima;
