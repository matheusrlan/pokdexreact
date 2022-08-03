import axios from 'axios';
import { useState } from 'react';
import './searchBar.css'

function SearchBar() {
    
    const [pokemon, setPokemon] = useState("");
    const [infoPokemon, setInfoPokemon] = useState([]);

    function onButtonClick() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
            const pokemonsInfo = response.data;
            setInfoPokemon([pokemonsInfo.name, pokemonsInfo.types[0].type.name, pokemonsInfo.sprites.front_default])
        }) 
    }

   return (
    <section>
    <div className="div-bar">
        <div className="searchbar">
            <input placeholder='Buscar Pokemon' value={pokemon} onChange={e => setPokemon(e.target.value)}></input>
        </div>
        <div className='btn-searchbar'>
            <button onClick={onButtonClick}>Buscar</button>
        </div>  

        <div className="wrapper__item">
            <div>
                <img src={infoPokemon[2]} alt={infoPokemon[0]} />
            </div>
            <div>
                <h1>{infoPokemon[0]}</h1>
                <h2>{infoPokemon[1]}</h2>
            </div>
            <div>
            </div>
        </div>  
    </div>
    </section>
   )
}

export default SearchBar;