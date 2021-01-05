import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import SearchBar from "./SearchBar";
import JobCard from "../layouts/JobCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreJobs, setParams } from "../../actions/searchActions";
import InfiniteScroll from "react-infinite-scroll-component";
import NoData from "../../Icons/NoData";
import UniText from "../../utils/UniText";
import { CircularProgress } from "@material-ui/core";

const Landing = () => {
  const jobs = useSelector((state) => state.search.jobs);
  const description = useSelector((state) => state.search.description);
  const page = useSelector((state) => state.search.page);
  const location = useSelector((state) => state.search.location);
  const loading = useSelector((state) => state.search.loading);

  const dispatch = useDispatch();
  const fetchMoreData = () => {
    dispatch(setParams({ description, location, page: page + 1 }));
    dispatch(fetchMoreJobs({ description, location, page }));
  };

  return (
    <div className="container">
      <div className={css(styles.mainContainer)}>
        <SearchBar />
        {jobs.length !== 0 ? (
          <div
            id="scrollableDiv"
            className={css(styles.jobContainer)}
            style={{ height: 550, overflow: "auto" }}
          >
            <InfiniteScroll
              className={css(styles.jobContainer)}
              dataLength={jobs.length}
              next={fetchMoreData}
              hasMore={true}
              loader={
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  ..loading
                </div>
              }
              scrollableTarget="scrollableDiv"
            >
              {jobs.map((el) => (
                <JobCard
                  position={el.title}
                  company={el.company}
                  location={el.location}
                  icon={el.company_logo}
                  type={el.type}
                  created_at={el.created_at}
                  id={el.id}
                  key={el.id}
                />
              ))}
            </InfiniteScroll>
          </div>
        ) : loading ? (
          <div className={css(styles.noDataElement)}>
            <CircularProgress />
          </div>
        ) : (
          <div className={css(styles.noDataElement)}>
            <NoData
              text={
                <UniText weight={"700"} size={14}>
                  {" "}
                  Try searching for jobs
                </UniText>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    top: "-30px",
    "@media (max-width: 420px)": {
      width: "100%",
      padding: "0px",
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
    padding: "0px 10px",
    marginTop: "70px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "300",
    overflow: "auto",
    justifyContent: "space-between",
    "@media (max-width: 420px)": {
      width: "100%",
      padding: "0px",
    },
  },
  noDataElement: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "-webkit-scrollbar": {
    width: "1em",
  },
  "-webkit-scrollbar-track": {
    boxShadow: "inset 0px 0px 6px rgba(0, 0, 0, 0.3)",
  },
  "-webkit-scrollbar-thumb": {
    backgroundColor: "darkgrey",
    outline: "1px solid slategrey",
  },
});
