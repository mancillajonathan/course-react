import React, { Fragment, useState } from 'react';

const Formulario = () => {
  // Creat state de citas
  const [cita, setActualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = () => {
    console.log('escribiendo...');
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>

      <form action=''>
        <label htmlFor=''>Nombre mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre mascota'
          onChange={handleChange}
        />

        <label htmlFor=''>Nombre dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          onChange={handleChange}
        />

        <label htmlFor=''>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={handleChange}
        />

        <label htmlFor=''>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={handleChange}
        />
      </form>
      <label htmlFor=''>Síntomas</label>
      <textarea
        className='u-full-width'
        name='sinstomas'
        onChange={handleChange}
      ></textarea>
      <button type='submit' className='u-full-width button-primary  '>
        Agregar cita
      </button>
    </Fragment>
  );
};

export default Formulario;
