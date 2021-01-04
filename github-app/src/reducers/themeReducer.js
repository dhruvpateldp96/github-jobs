import { TOGGLE_THEME } from "../actions/types";
import { lightTheme, darkTheme } from "../components/Themes";

const initialState = {
  theme: lightTheme,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
