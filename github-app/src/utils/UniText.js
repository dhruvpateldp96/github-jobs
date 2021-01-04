import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import PropTypes from "prop-types";

const UniText = (props) => {
  const { children, containerStyle, tooltip } = props;
  const styles = createStyles(props);

  return (
    <div title={tooltip} className={css(styles.container, containerStyle)}>
      {children}
    </div>
  );
};

const createStyles = ({ size, color, weight, lineheight, display }) =>
  StyleSheet.create({
    container: {
      display: display,
      fontSize: size,
      fontWeight: weight,
      color: getColor(color),
      lineHeight: `${getLineHeight(size, lineheight)}px`,
      transition: "all 0.50s linear",
    },
  });

const getLineHeight = (size, lineHeight) =>
  lineHeight || lineHeights[size] || 16;

const lineHeights = {
  10: 12,
  12: 16,
  14: 20,
  16: 20,
  18: 24,
  20: 28,
  24: 32,
  34: 48,
  48: 64,
};

const getColor = (color) =>
  colorTemplate.hasOwnProperty(color) ? colorTemplate[color] : color;

const colorTemplate = {
  light: "#363537",
  dark: "#FAFAFA",
  // primary:
  secondary: "gray",
  blue: "blue",
  transparency: 50,
};

UniText.defaultProps = {
  size: 16,
  color: null,
  weight: "normal",
  display: "inline-block",
  tooltip: null,
};

UniText.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.string,
  tooltip: PropTypes.string,
};

export default UniText;
export { colorTemplate as globalStyles };
