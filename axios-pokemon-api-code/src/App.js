import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Original API code without axios
  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //       setPokemon(response.results)
  //     })
  //     .catch((error) => {
  //       console.log(err);
  //     })
  // }, []);

const [pokemon, setPokemon] = useState([]);
useEffect(()=>{
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
      setPokemon(response.data.results);
    })
    .catch((error) => console.log(error));
}, []);

  return (
    
    <div style={{ textAlign:"center"}}>
      <ul>
        {
          pokemon.map((pokemonObj, index)=> {
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}
export default App;