import React from "react";
import chatinputStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const firebase = require("firebase");

class ChatInputComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <TextField
          className={classes.chatTextBox}
          onChange={this.handleInputChange}
        ></TextField>
        <Button color="primary" variant="contained" onClick={this.sendMessage}>
          Send
        </Button>
      </div>
    );
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message);
  };

  handleInputChange = async e => {
    await this.setState({ message: e.target.value });
    console.log(this.state.message);
  };
}

export default withStyles(chatinputStyles)(ChatInputComponent);
