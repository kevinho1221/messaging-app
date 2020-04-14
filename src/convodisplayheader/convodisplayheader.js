import React from "react";
import convodisplayheaderStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";

class ConvoDisplayHeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.hasSelectedOnce ? (
          <div className={classes.main}>
            <div className={classes.avataruserWrapper}>
              <Avatar className={classes.avatar}>
                {this.props.firstname.charAt(0) + this.props.lastname.charAt(0)}
              </Avatar>
              <div className={classes.name}>
                {this.props.firstname + " " + this.props.lastname}
              </div>
            </div>
            <div className={classes.avataruserWrapper}> </div>
            <IconButton
              className={classes.iconbuttonstyles}
              onClick={this.props.logout}
            >
              <ExitToAppIcon className={classes.exitIcon}></ExitToAppIcon>
            </IconButton>
          </div>
        ) : (
          <div className={classes.main}>
            <div className={classes.avataruserWrapper}> </div>
            <IconButton
              className={classes.iconbuttonstyles}
              onClick={this.props.logout}
            >
              <ExitToAppIcon className={classes.exitIcon}></ExitToAppIcon>
            </IconButton>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(convodisplayheaderStyles)(
  ConvoDisplayHeaderComponent
);
