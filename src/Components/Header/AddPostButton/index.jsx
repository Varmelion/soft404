import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CreateIcon from "@material-ui/icons/Create";
import styles from "./styles";

class AddPostButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.fabButton}
          component={NavLink}
          to="/create_post"
        >
          <CreateIcon />
        </Fab>
      </div>
    );
  }
}
export default withStyles(styles)(AddPostButton);
