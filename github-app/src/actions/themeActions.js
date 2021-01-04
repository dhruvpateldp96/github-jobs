import { TOGGLE_THEME } from "./types";

export const toggleTheme = (payload) => {
  return {
    type: TOGGLE_THEME,
    payload: payload,
  };
};

// export const fetchMovies = (text) => {
//   return (dispatch) => {
//   return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIES,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//   };
// };

// export const fetchMovie = (id) => {
//   return (dispatch) => {
//     return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//     };
// };

// export const setLoading = () => {
//   return {
//     type: LOADING,
//   };
// };
