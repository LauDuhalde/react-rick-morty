import { useState } from 'react';
import './App.css';
import imageRickMorty from "./img/rick-morty.png"
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null); 

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character'); //Llamada a API
    const characterApi = await api.json(); //Formatea resultado de llamado anterior
    setCharacters(characterApi.results); //Guarda resultado en estado

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {characters ?( //IF characteres no es null
          <Characters characters={characters} setCharacters={setCharacters} />
        ):(
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
             Buscar Personajes
            </button>
          </>
        )
        }
 
      </header>
    </div>
  );
}

export default App;
