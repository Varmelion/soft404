import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    marginRight: -20
  },
  logo: {
    width: 60,
    height: 60
  }
});

class Logo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Avatar
        alt="Soft404 logo"
        className={classes.logo}
        src="https://pugofka.com/upload/iblock/bb0/404_error.png"
        component={NavLink}
        to="/"
      />
    );
  }
}

export default withStyles(styles)(Logo);
