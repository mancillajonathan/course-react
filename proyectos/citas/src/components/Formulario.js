import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = () => {
  // Create state de citas
  const [cita, setActualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  // Segundo state
  const [error, setError] = useState(false);

  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (event) => {
    setActualizarCita({
      // destructuring
      ...cita, // tomar una copia para reescribir la info
      [event.target.name]: event.target.value,
    });
  };

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Función cuando el usuario presiona agregar una cita
  const submitCita = (event) => {
    event.preventDefault();

    // Validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      mascota.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);
      return;
    }

    // Eliminar mensaje de previo
    setActualizarCita(false);

    // Asignar un ID
    cita.id = uuid();
    // Crear la cita
    console.log(cita);

    // Reiniciar el form
  };

  return (
    <Fragment>
      {error ? (
        <p className='alerta-error'>Todos los campos son obligatorios</p>
      ) : null}
      <h2>Crear cita</h2>

      <form onSubmit={submitCita}>
        <label htmlFor=''>Nombre mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre mascota'
          value={mascota}
          onChange={handleChange}
        />

        <label htmlFor=''>Nombre dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          value={propietario}
          onChange={handleChange}
        />

        <label htmlFor=''>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          value={fecha}
          onChange={handleChange}
        />

        <label htmlFor=''>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          value={hora}
          onChange={handleChange}
        />
        <label htmlFor=''>Síntomas</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          value={sintomas}
          onChange={handleChange}
        ></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar citas
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
