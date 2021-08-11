const axios = require('axios');

const getAllPokemon = (input)=>{
  const pokemonAddress = 'https://pokeapi.co/api/v2/pokemon/';
  return axios.get(pokemonAddress);
};

module.exports = getAllPokemon;
