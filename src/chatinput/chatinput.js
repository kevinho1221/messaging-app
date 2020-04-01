import React from "react";
import chatinputStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ChatInputComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  render() {
    const { classes } = this.props;
    if (this.props.hasSelectedOnce == true) {
      return (
        <div className={classes.main}>
          <TextField
            id="chatTextBox"
            className={classes.chatTextBox}
            onChange={this.handleInputChange}
            value={this.state.message}
            onKeyDown={this.onKeyDownHandler}
          ></TextField>
          <Button
            color="primary"
            variant="contained"
            onClick={this.sendMessage}
          >
            Send
          </Button>
        </div>
      );
    } else {
      return <div className={classes.main}></div>;
    }
  }

  onKeyDownHandler = e => {
    if (e.key === "Enter") {
      this.sendMessage();
    }
  };
  sendMessage = async () => {
    this.props.sendMessage(this.state.message);
    await this.setState({ message: "" });
  };

  handleInputChange = async e => {
    await this.setState({ message: e.target.value });
    //console.log(this.state.message);
  };
}

export default withStyles(chatinputStyles)(ChatInputComponent);
