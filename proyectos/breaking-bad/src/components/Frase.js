import React from 'react';

const Frase = ({ frase }) => {
  return (
    <div className=''>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </div>
  );
};

export default Frase;
