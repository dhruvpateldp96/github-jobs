import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../actions/themeActions";
import { lightTheme, darkTheme } from "../Themes";
import { StyleSheet, css } from "aphrodite-jss";
import CustomSwitch from "./Switch";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      dispatch(toggleTheme(darkTheme));
    } else {
      setTheme("light");
      dispatch(toggleTheme(lightTheme));
    }
  };
  return (
    <div>
      <nav className={css(styles.navBar)}>
        <div className="container">
          <div className={css(styles.header)}>
            <Link to="/">
              <div className={css(styles.headerText)}>devJobs</div>
            </Link>
            <CustomSwitch onToggle={themeToggler} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#5a64f9",
    borderBottomLeftRadius: "70px",
    height: "10vh",
    display: "flex",
    paddingTop: "20px",
    height: "100px",
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#FFFF",
    fontWeight: "700",
    fontSize: "20px",
  },
});
