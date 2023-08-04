import axios from 'axios';
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actions-type";

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};


export const addFavorite = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const {data} = await axios.post(endpoint, character)
      return dispatch ({
        type: 'ADD_FAVORITE',
        payload: data,
      });
    } catch (error) {
     console.log(error.message); 
    }
  }
};
// export const removeFavorite = (id) => {
//     return {type: REMOVE_FAVORITE, payload: id};
// };
export const removeFavorite = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(endpoint)
      return dispatch ({ 
        type: 'REMOVE_FAVORITE',
        payload: data,
      });
    } catch (error) {
       console.log('Error al eliminar favorito', error.message);
    }
 };
};
// export const removeFavorite = (id) => {
//   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`; // Agrega el ID a la URL
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch ({ 
//         type: 'REMOVE_FAVORITE',
//         payload: data,
//       });
//     });
//   };
// };