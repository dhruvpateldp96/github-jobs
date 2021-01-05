import {
  FETCH_JOBS,
  FETCH_MORE_JOBS,
  SET_PARAMS,
  LOADING,
} from "../actions/types";

const initialState = {
  jobs: [],
  description: "",
  page: 0,
  location: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PARAMS:
      return {
        ...state,
        description: action.payload.description,
        page: action.payload.page,
        location: action.payload.location,
      };
    case FETCH_MORE_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
        loading: false,
      };
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
