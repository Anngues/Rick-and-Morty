import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card.jsx';
import { removeFavorite, filterCards, orderCards } from '../../redux/actions.js';
import style from './Favorites.module.css';


const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false); // Estado local para controlar el ordenamiento ascendente o descendente

  const handleCloseCard = (id) => {
    dispatch(removeFavorite(id));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux((prev) => !prev); // Estado local para indicar si está ordenando ascendente o descendente
  };

  return (
    <div>
      <h2 className={style.titulo}>Favorites</h2>
      <div className={style.filterContainer}>
        <label>Filtrar por género: </label>
        <select onChange={handleFilter}>
          <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.filterContainer}>
        <label>Ordenar por ID: </label>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div className={style.container}>
      {favorites.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={() => handleCloseCard(character.id)}
          className={style.favoriteCard}
        />
      ))}
      </div>
    </div>
  );
};

export default Favorites;