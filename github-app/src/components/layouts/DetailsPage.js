import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { useSelector, useDispatch } from "react-redux";
import { getJobDetails } from "../../utils";
import SearchBar from "../containers/SearchBar";
import CompanyBar from "./CompanyBar";

const DetailsPage = (props) => {
  console.log(props.match.params.id);
  const jobId = props.match.params.id;
  const theme = useSelector((state) => state.theme.theme);

  const jobs = useSelector((state) => state.search.jobs);

  const [jobObj, setJobObj] = useState(getJobDetails(jobs, jobId));
  const { description, company_url, company_logo, company_name } = jobObj;

  const styles = StyleSheet.create(styleObj(theme));
  return (
    <div className="container">
      <div class="row justify-content-center">
        <div className={css(styles.mainContainer)}>
          <CompanyBar
            company_url={company_url}
            company_logo={company_logo}
            company_name={company_name}
          />
          <div
            className={css(styles.detailsContainer)}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

const styleObj = (theme) => ({
  mainContainer: {
    padding: "20px 20px",
    borderRadius: "2px",
    position: "relative",
    width: "70%",
    top: "-30px",
  },
  detailsContainer: {
    padding: "20px 20px",
    borderRadius: "2px",
    position: "relative",
    marginTop: "40px",
    backgroundColor: theme.secondary,
    transition: "all 0.50s linear",
    "@media (max-width: 420px)": {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
    },
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
  jobContainer: {
    marginTop: "70px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "300",
    overflow: "auto",
    justifyContent: "space-between",
  },
});
