import { FETCH_JOBS, FETCH_MORE_JOBS, SET_PARAMS, LOADING } from "./types";
import axios from "../utils/axios";

// import { APIKey } from '../../../movies-series-info/src/APIKey';

export const setParams = (paramObj) => {
  return {
    type: SET_PARAMS,
    payload: paramObj,
  };
};

// params = {location, page, description}
export const fetchJobs = ({ ...params }) => {
  console.log("INSIDE ACTION FETCH JOB");
  return (dispatch) => {
    return axios
      .get(`https://jobs.github.com/positions.json`, {
        params: { ...params },
      })
      .then((response) => {
        dispatch({
          type: FETCH_JOBS,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchMoreJobs = ({ ...params }) => {
  console.log(params.page);
  return (dispatch) => {
    return axios
      .get(`https://jobs.github.com/positions.json`, {
        params: { ...params },
      })
      .then((response) => {
        dispatch({
          type: FETCH_MORE_JOBS,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

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

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
