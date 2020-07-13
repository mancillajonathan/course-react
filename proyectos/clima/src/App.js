import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  const [busqueda, guardasBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = 'ebc368a4fd1c64876afe773fe797bab4';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);

        // deteca si hubo resultados correctos en la consulta
        if (resultado.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje='No hay resultados' />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header titulo='Clima React App' />

      <div className='contenedor-form'>
        <div className='row'>
          <div className='col m6 s12'>
            <Formulario
              busqueda={busqueda}
              guardasBusqueda={guardasBusqueda}
              setConsultar={setConsultar}
            />
          </div>
          <div className='col m6 s12'>
            {/* <Clima resultado={resultado} /> */}
            {componente}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
