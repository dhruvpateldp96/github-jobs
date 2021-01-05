import { TOGGLE_THEME } from "./types";

export const toggleTheme = (payload) => {
  return {
    type: TOGGLE_THEME,
    payload: payload,
  };
};
