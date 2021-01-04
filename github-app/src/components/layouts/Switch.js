import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HiSun, HiMoon } from "react-icons/hi";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.grey[500],
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const CustomSwitch = ({ onToggle }) => {
  const [check, setCheck] = React.useState(true);

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <HiMoon style={{ color: "white" }} />
          </Grid>
          <Grid item>
            <AntSwitch
              color="default"
              checked={check}
              onChange={() => {
                onToggle();
                setCheck(!check);
              }}
              name="checkedC"
            />
          </Grid>
          <Grid item>
            <HiSun style={{ color: "white" }} />
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
};

export default CustomSwitch;
