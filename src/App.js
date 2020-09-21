//Import du HOOKS useEffet qui permet de faire une action au chargement
import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";

import { CLICK, showPokemonAction, catchPokemonAction } from "./store/action";
import fetchPokemons from "./store/fetchPokemons";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";

//On peut passer click grâce aux lignes du dessous
const App = ({
  click,
  fetchPokemons,
  pending,
  showPokemon,
  pokemons,
  catchPokemon,
}) => {
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  if (pending) {
    return <Loader />;
  }

  return (
    <div className="App">
      <button onClick={() => click()}>Clique</button>
      <GameBoy
        showPokemon={() => showPokemon(pokemons)}
        catchPokemon={catchPokemon}
      />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),

    click: () => dispatch({ type: CLICK }),

    showPokemon: (pokemons) => dispatch(showPokemonAction(pokemons)),

    catchPokemon: () => dispatch(catchPokemonAction()),
  };
};

//On récupère click, on le connect à App et du coup dans App.js on peut accéder à click
export default connect(mapStateToProps, mapDispatchToProps)(App);
