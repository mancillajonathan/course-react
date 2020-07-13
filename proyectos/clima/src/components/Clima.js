import React from 'react';

const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  if (!name) {
    return null;
  }

  // grados kelvin
  const kelvin = 273.15;

  return (
    <div>
      <div className='card-panel white col s12'>
        <div className='black-text'>
          <h2>El clima de {name}</h2>
          <div className='temperatura'>{parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span></div>
        </div>
      </div>
    </div>
  );
};

export default Clima;
