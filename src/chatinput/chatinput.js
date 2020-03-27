import React from "react";
import chatinputStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

class ChatInputComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <TextField className={classes.chatTextBox}></TextField>
      </div>
    );
  }
}

export default withStyles(chatinputStyles)(ChatInputComponent);
