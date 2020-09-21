import { fetchPokemonSuccess, fetchPokemonPending } from "./action";

const numberOfPokemon = 151;
const urls = [];

for (let i = 1; i <= numberOfPokemon; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
}

//Pour chaque url on fait un fetch (qui permet d'appeler l'API)
const requests = urls.map((url) => fetch(url));

export default () => {
  return (dispatch) => {
    dispatch(fetchPokemonPending());
    //Promise.all() prend en paramètre un tableau ou un itérale de différentes requêtes et il ne passe pas à la suite tant que toutes les requêtes ne sont pas faites
    Promise.all(requests)
      //response c'est l'emsemble des promesses
      //res.json permet de transformer une promesse en objet JS lisible
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((pokemons) =>
        pokemons.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          captureRate: pokemon.capture_rate,
          isCatch: false, //Ce qui va changer lorsqu'on capture un pokemon
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        }))
      )
      .then((pokemons) => dispatch(fetchPokemonSuccess(pokemons)));
  };
};
