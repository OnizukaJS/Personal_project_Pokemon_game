export const CLICK = "CLICK";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_PENDING = "FETCH_POKEMON_PENDING";
export const SHOW_POKEMON = "SHOW_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON";

export const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons,
});
//Ici on récupère "pokemons" qui est le résultat de fetchPokemons.js et qui déclenche FETCH_POKEMON_SUCCESS. Dans le reducer quand il voit que FETCH_POKEMON_SUCCESS est appelé, il met à jour pokemons avec ce qu'il a

export const fetchPokemonPending = (pokemons) => ({
  type: FETCH_POKEMON_PENDING,
});

export const showPokemonAction = (pokemons) => {
  const filteredPokemons = pokemons.filter((pokemon) => !pokemon.isCatch);
  const max = filteredPokemons.length;
  const random = Math.floor(Math.random() * max);
  const onScreen = filteredPokemons[random];

  return (dispatch) => {
    dispatch({
      type: SHOW_POKEMON,
      onScreen,
    });
  };
};

export const catchPokemonAction = (pokemons) => {
  const random = Math.floor(Math.random() * 255);

  return (dispatch) => {
    dispatch({
      type: CATCH_POKEMON,
      random,
    });
  };
};
