import CartShipping from "./components/cartshipping/cartshipping";
import Pokedex from "./components/pokedex";
import SearchBar from "./components/searchBar/searchBar";
import './App.css'
import { useState } from "react";

function App() {

  const [pokemonInfo, setPokemonInfo] = useState([])

  function handleBuy(name, price){
    setPokemonInfo([...pokemonInfo, {name, price}])
  }


  return (
    <div className="app">
      <div className="body">
        <SearchBar />
        <Pokedex handleBuy={handleBuy}/>
      </div>
      <div className="sidebar">
        <CartShipping pokemonInfo={pokemonInfo}/>
      </div>
    </div>
  );
}

export default App;

