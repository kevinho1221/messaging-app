import React from "react";
import chatinputStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

class ChatInputComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  render() {
    const { classes } = this.props;
    /*if (this.props.hasSelectedOnce == true) {
      return (
        <div className={classes.main}>
          <TextField
            id="chatTextBox"
            className={classes.chatTextBox}
            onChange={this.handleInputChange}
            value={this.state.message}
            onKeyDown={this.onKeyDownHandler}
            autoComplete="off"
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
    }*/
    return (
      <div className={classes.main}>
        <TextField
          id="chatTextBox"
          className={classes.chatTextBox}
          onChange={this.handleInputChange}
          value={this.state.message}
          onKeyDown={this.onKeyDownHandler}
          autoComplete="off"
          onFocus={this.onFocusHandler}
        ></TextField>
        <IconButton
          className={classes.iconbuttonstyles}
          onClick={this.sendMessage}
        >
          <SendIcon className={classes.sendIcon}></SendIcon>
        </IconButton>
      </div>
    );
  }

  /*
   <Button
          className={classes.buttonstyle}
          //color="primary"
          variant="contained"
          onClick={this.sendMessage}
        >
          Send
        </Button>
      */

  onFocusHandler = () => {
    this.props.setHasRead();
  };

  onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      this.sendMessage();
    }
  };
  sendMessage = async () => {
    this.props.sendMessage(this.state.message);
    await this.setState({ message: "" });
  };

  handleInputChange = async (e) => {
    await this.setState({ message: e.target.value });
    //console.log(this.state.message);
  };
}

export default withStyles(chatinputStyles)(ChatInputComponent);
