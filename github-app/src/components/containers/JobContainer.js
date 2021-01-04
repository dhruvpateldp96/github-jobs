import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import JobCard from "../layouts/JobCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreJobs, setParams } from "../../actions/searchActions";

const JobContainer = () => {
  const jobs = useSelector((state) => state.search.jobs);
  const description = useSelector((state) => state.search.description);
  const page = useSelector((state) => state.search.page);
  const location = useSelector((state) => state.search.location);

  const dispatch = useDispatch();
  const fetchMoreData = () => {
    dispatch(setParams({ description, location, page: page + 1 }));
    dispatch(fetchMoreJobs({ description, location, page }));
  };
  return (
    <div id="scrollableDiv" className={css(styles.jobContainer)}>
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {jobs.map((i, index) => (
          <div key={index}>div - #{index}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default JobContainer;

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    top: "-30px",
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
    overflow: "auto",
    marginTop: "70px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
