import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { useSelector, useDispatch } from "react-redux";
import UniText from "../../utils/UniText";

const CompanyBar = ({ company_url, company_logo, company_name }) => {
  const theme = useSelector((state) => state.theme.theme);
  const styles = StyleSheet.create(styleObj(theme));

  return (
    <div className={css(styles.searchBar)}>
      <div style={{ flex: "1 1 5%" }}>
        <img
          src={company_logo}
          className={css(styles.icon)}
          style={{ height: "50px", width: "50px" }}
        />
      </div>
      <div
        style={{
          flex: "1 1 33%",
          margin: "5px 0px",
        }}
      >
        <UniText size={20} weight={"700"}>
          {company_name}
        </UniText>
      </div>
      <div>
        <button href={company_url} className={css(styles.button)}>
          Company Site
        </button>
      </div>
    </div>
  );
};

export default CompanyBar;

const styleObj = (theme) => ({
  searchBar: {
    borderRadius: "2px",
    padding: "20px 15px 20px 15px",
    backgroundColor: theme.secondary,
    transition: "all 0.50s linear",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 420px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  button: {
    margin: "5px 0px",
    padding: "5px 15px",
    color: theme.text,
    transition: "all 0.50s linear",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#5a64f9",
  },
  icon: {
    margin: "5px 0px",
    position: "relative",
    borderRadius: "2px",
    backgroundColor: theme.secondary,
    transition: "all 0.50s linear",
    // backgroundImage: `url(${DEFAULT_IMG})`,
  },
});
