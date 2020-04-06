import React from "react";
import convodisplayheaderStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { Avatar } from "@material-ui/core";

class ConvoDisplayHeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;
    const lastinit = this.props.lastname.charAt(0);
    //const lastinit = this.props.lastname.charAt(0);
    return (
      <div className={classes.main}>
        <Avatar className={classes.avatar}>
          {this.props.firstname.charAt(0) + this.props.lastname.charAt(0)}
        </Avatar>
        <div className={classes.name}>
          {this.props.firstname + " " + this.props.lastname}
        </div>
      </div>
    );
  }
}

export default withStyles(convodisplayheaderStyles)(
  ConvoDisplayHeaderComponent
);
