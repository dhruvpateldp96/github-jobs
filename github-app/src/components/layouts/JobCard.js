import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { useSelector } from "react-redux";
import UniText, { globalStyles } from "../../utils/UniText";
import { getAgoDate } from "../../utils";
import { Link } from "react-router-dom";

const DEFAULT_IMG =
  "https://forcebrands.com/assets/fallback/company-default-4549373b79625823b56e48c7918608f77be903ad2fd38cfc9b6929d095994013.png";

const JobCard = ({
  position,
  company,
  location,
  icon,
  type,
  created_at,
  id,
}) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = StyleSheet.create({
    jobCard: {
      position: "relative",
      borderRadius: "6px",
      padding: "10px 10px",
      height: "150px",
      flex: "1 1 30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      margin: "20px 10px",
      backgroundColor: theme.secondary,
      transition: "all 0.50s linear",
    },
    icon: {
      position: "relative",
      top: "-40px",
      right: "-20px",
      height: "50px",
      width: "50px",
      borderRadius: "10px",
      backgroundColor: theme.secondary,
      transition: "all 0.50s linear",
      backgroundImage: `url(${DEFAULT_IMG})`,
    },
    card: {
      position: "relative",
      top: "-40px",
      width: "100%",
      height: "100%",
      padding: "10px 10px 20px 10px",
      display: "flex",
      flexDirection: "column",
      // alignItems: "flex-start",
      justifyContent: "space-between",
    },
    cardUpperRow: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    cardLowerRow: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    overflow: {
      width: "270px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      resize: "horizontal",
    },
  });

  return (
    <div className={css(styles.jobCard)}>
      <Link to={"/" + id}>
        {/* Icon */}
        <img
          src={icon}
          className={css(styles.icon)}
          style={{ height: "50px", width: "50px" }}
        />
        <div className={css(styles.card)}>
          <div className={css(styles.cardUpperRow)}>
            <UniText size={10} weight={"700"} color={globalStyles.secondary}>
              {getAgoDate(created_at)}
            </UniText>
            <div className={css(styles.overflow)}>
              <UniText size={14} weight={"1000"} color={theme.text}>
                {position}
              </UniText>
            </div>
            <UniText size={10} weight={"700"} color={globalStyles.secondary}>
              {company}
            </UniText>
          </div>

          <div className={css(styles.cardLowerRow)}>
            <UniText size={10} weight={"700"} color={globalStyles.blue}>
              {location}
            </UniText>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
