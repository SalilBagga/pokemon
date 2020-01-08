import React from 'react';

const Pokedex = ({ pokemons }) => {
  return (
    <div className="poke-list">
      <div class="row">
        {pokemons.map(pokemon => {
          let url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id
            .toString()
            .padStart(3, '0')}.png`;
          return (
            <div class="column">
              <div key={pokemon.id} class="card">
                <img src={url} alt="pokiface" />
                <h3>Name:{pokemon.name}</h3>
                <h4>
                  ID:{pokemon.id.toString().padStart(3, '0')}
                  <br />
                  Type:{pokemon.type}
                  <br />
                  Exp:{pokemon.base_experience}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
