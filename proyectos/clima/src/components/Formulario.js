import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, guardasBusqueda, setConsultar }) => {
  // State del formulario
  //   const [busqueda, guardasBusqueda] = useState({
  //     ciudad: '',
  //     pais: '',
  //   });

  // Error
  const [error, setError] = useState(false);

  // extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // Funciones que coloca los elementos en el state
  const handleChange = (event) => {
    //actualizar el statte
    guardasBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value,
    });
  };

  // Cuando el usuario da submit al form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar
    if (ciudad.trim() === '' || pais.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    // Pasarlo al componente principal
    setConsultar(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error ? <Error mensaje='Ambos campos son obligatorios' /> : null}
        <div className='input-field col s12'>
          <input
            type='text'
            name='ciudad'
            id='ciudad'
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor='ciudad'>Ciudad: </label>
        </div>
        <div className='input-field col s12'>
          <select
            name='pais'
            id='pais'
            value={pais}
            onChange={handleChange}
            // onScrol={handleScrool}
          >
            <option value=''>--- Seleccione un país ---</option>
            <option value='US'>Estados Unidos</option>
            <option value='MX'>México</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
            <option value='CR'>Costa Rica</option>
            <option value='ES'>España</option>
            <option value='PE'>Perú</option>
          </select>
          <label htmlFor='pais'>País: </label>
        </div>

        <div className='input-field col s12'>
          <input
            type='submit'
            value='Buscar clima'
            className='waves-effect waves-light btn-large btn-block yellow accent-4'
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
