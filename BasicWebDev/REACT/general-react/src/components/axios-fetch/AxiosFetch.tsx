/*
Inside this component, I'll show a simple way to perform a fetch request and an axios request. 
- We'll look at the basic example for now 
*/

import axios from "axios";
import { SyntheticEvent, useState } from "react";

function AxiosFetch() {
  // What I plan to do is send an HTTP request to some API
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<any>({});

  let updatePokemonInput = (e: SyntheticEvent) => {
    setPokemonName((e.target as HTMLInputElement).value);
  };

  let searchWithFetch = async () => {
    // We use fetch to send simple API requests that were fully customizable
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    let data = await res.json();
    console.log(data);
    setPokemon(data);
  };

  /*
  Axios is an additional library we can pull in for sending HTTP requests 
  Why would we want this? 
    - Centrally configured requests 
    - Better error handling 
    - Automatically parses JSON 
  */

  let seatchWithAxios = async() => {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    setPokemon(res.data) // Automatically parses it into JSON 
  }

  return (
    <div>
      <label>
        Enter Pokemon:{" "}
        <input
          type="text"
          id="pokemon-name-field"
          onChange={updatePokemonInput}
        />
      </label>
      <button onClick={searchWithFetch}>Search with Fetch</button>
      <button onClick={seatchWithAxios}>Search with Axios</button>
      <h4>NOTE: Pokemon name must be in all lowercase</h4>
      <h1>Pokemon: </h1>
      {/* Conditional Rendering: Rendering certain HTML based off some condition */}
      {pokemon.name != null ? (
        <>
          <h1>Pokemon Name: {pokemonName}</h1>
          <img src={pokemon.sprites.front_default} />
          <img src={pokemon.sprites.front_shiny} />
          <img src={pokemon.sprites.back_default} />
          <img src={pokemon.sprites.back_shiny} />
        </>
      ) : (
        <></>
      )}

      {/* We'll add in an image */}
    </div>
  );
}

export default AxiosFetch;
