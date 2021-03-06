import { FETCH_JOBS, FETCH_MORE_JOBS, SET_PARAMS, LOADING } from "./types";
import axios from "../utils/axios";

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
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`,
        {
          params: { ...params },
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
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
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`,
        {
          params: { ...params },
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => {
        dispatch({
          type: FETCH_MORE_JOBS,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
