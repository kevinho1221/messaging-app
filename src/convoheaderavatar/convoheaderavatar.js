import React from "react";
import convoheaderavatarStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { Avatar } from "@material-ui/core";

class ConvoHeaderAvatarComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.main}>
          <Avatar className={classes.avatar}>
            {this.props.firstinit + this.props.lastinit}
          </Avatar>
          <div className={classes.name}>{this.props.fullname}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(convoheaderavatarStyles)(ConvoHeaderAvatarComponent);
