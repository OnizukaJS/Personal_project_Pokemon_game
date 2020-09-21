import React from "react";
import { connect } from "react-redux";

const Screen = ({ onScreen, pokemons }) => {
  //Si un pokemon existe sur l'écran
  if (onScreen.id) {
    if (pokemons[onScreen.id - 1].isCatch) {
      return (
        <div>
          <h3 className="screen-name">{onScreen.name}</h3>
          <p>is captured</p>

          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt={onScreen.name}
          />
        </div>
      );
    }
    return (
      <div>
        <h3 className="screen-name">{onScreen.name}</h3>
        <p>Capture rate: {onScreen.captureRate}</p>
        <img src={onScreen.img} alt={onScreen.name} />
      </div>
    );
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  );
};

const mapStateToProps = ({ onScreen, pokemons }) => {
  return {
    onScreen,
    pokemons,
  };
};

export default connect(mapStateToProps)(Screen);
