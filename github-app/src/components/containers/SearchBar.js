import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Button } from "@material-ui/core";
import UniText from "../../utils/UniText";
import { fetchJobs, setParams } from "../../actions/searchActions";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const styles = StyleSheet.create(styleSheetObject(theme));

  const [titleSearch, setTitleSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  //   useEffect(() => {}, []);

  console.log(titleSearch, locationSearch);
  return (
    <div className={css(styles.searchBar)}>
      {/* Filter by title */}
      <div style={{ flex: "1 1 33%" }}>
        {/* <FaSearch />{" "} */}
        <input
          type="text"
          placeholder="Filter By title"
          className={css(styles.inputBarTitle)}
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
        ></input>
      </div>
      {/* filter by location */}
      <div style={{ flex: "1 1 33%" }}>
        <input
          type="text"
          placeholder="Filter By location"
          className={css(styles.inputBarLoc)}
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
        ></input>
      </div>
      {/* CheckBox full time only */}
      <div
        style={{
          flex: "1 1 33%",
          display: "flex",
          justifyContent: "space-between",
          color: theme.text,
        }}
      >
        <div className={css(styles.checkBoxDiv)}>
          <Checkbox className={css(styles.checkBox)} />{" "}
          <UniText size={12}>Full Time Only</UniText>
        </div>
        <button
          className={css(styles.button)}
          onClick={() => {
            dispatch(
              setParams({
                description: titleSearch,
                location: locationSearch,
                page: 0,
              })
            );
            dispatch(
              fetchJobs({
                description: titleSearch,
                location: locationSearch,
                page: 0,
              })
            );
          }}
        >
          {" "}
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

const styleSheetObject = (theme) => ({
  searchBar: {
    borderRadius: "2px",
    padding: "0px 15px",
    height: "60px",
    backgroundColor: theme.secondary,
    transition: "all 0.50s linear",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 420px)": {
      width: "100%",
    },
  },
  inputBarTitle: {
    backgroundColor: theme.secondary,
    color: theme.text,
    transition: "all 0.50s linear",
    margin: "5px 0px",
    outline: "none",
    border: "none",
    flex: "1 1 33%",
    "@media (max-width: 420px)": {
      width: "100%",
    },
  },
  inputBarLoc: {
    backgroundColor: theme.secondary,
    color: theme.text,
    transition: "all 0.50s linear",
    margin: "5px 0px",
    outline: "none",
    border: "none",
    flex: "1 1 33%",
    "@media (max-width: 420px)": {
      display: "none",
    },
  },
  button: {
    margin: "5px 0px",
    padding: "0px 15px",
    color: theme.text,
    transition: "all 0.50s linear",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#5a64f9",
  },
  checkBoxDiv: {
    display: "flex",
    alignItems: "center",
    transition: "all 0.50s linear",
    "@media (max-width: 420px)": {
      display: "none",
    },
  },
  checkBox: {
    transition: "all 0.50s linear",
  },
});
