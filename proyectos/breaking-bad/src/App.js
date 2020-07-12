import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border 2px solid black;
`;

function App() {
  // promises
  // const consultarAPI = () => {
  //   const api = fetch(
  //     'http://breaking-bad-quotes.herokuapp.com/v1/quotes'
  //   );
  //   const frase = api.then((respuesta) => respuesta.json());
  //   frase.then(resultado => console.log(resultado));
  // };

  //Async/await
  const consultarAPI = async () => {
    const api = await fetch(
      'http://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );
    const frase = await api.json();
    console.log(frase[0]);
  };

  return (
    <Container>
      <Button onClick={consultarAPI}>Obtener frase</Button>
    </Container>
  );
}

export default App;
