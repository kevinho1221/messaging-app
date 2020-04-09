import React from "react";
import convodisplayheaderStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.props.logout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div className={classes.main}>
            <div className={classes.avataruserWrapper}> </div>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.props.logout}
            >
              Log Out
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(convodisplayheaderStyles)(
  ConvoDisplayHeaderComponent
);
