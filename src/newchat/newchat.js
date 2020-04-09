import React from "react";
import newchatStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

class NewChatComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      recipient: "",
    };
  }

  render() {
    const { classes } = this.props;

    const chatList = this.props.chats.map(
      (chat) => chat.users.filter((email) => email != this.props.currentuser)[0]
    );

    const userList = this.props.users;
    const friendsList = userList.filter((user) =>
      chatList.includes(user.email)
    );
    //console.log(chatList);
    //console.log(userList);
    //console.log(friendsList);

    return (
      <div>
        <div className={classes.convoheader}>
          <Autocomplete
            id="friends-list"
            freeSolo
            clearOnEscape
            options={friendsList}
            getOptionLabel={(option) => {
              if (option.firstname) {
                return [option.firstname, option.lastname].join(" ");
              } else {
                return option;
              }
            }}
            className={classes.autocompletestyles}
            edge="start"
            onChange={(event, value, reason) =>
              this.onChangeHandler(event, value, reason)
            }
            onClose={(event, reason) => {
              //const recipient = this.state.recipient;
              this.handleClose(event, this.state.recipient, reason);
            }}
            renderInput={(params) => (
              <TextField {...params} label="To:" variant="outlined" />
            )}
          />
          <div className={classes.buttoncontainer}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={this.props.logout}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    );
  }

  handleClose = async (event, value, reason) => {
    //Runs this if user clicks stats typing and clicks off of the autocomplete box
    if (reason == "blur") {
      console.log(reason);
      //console.log(value);
      var autocompleteValue = document.getElementById("friends-list");
      var thevalue = autocompleteValue.getAttribute("value");
      await this.setState({ recipient: thevalue });
      this.props.setNewRecipient(this.state.recipient);

      console.log(thevalue);
      console.log(this.state.recipient);
    }
  };

  onChangeHandler = async (event, value, reason) => {
    if (value) {
      if (reason == "select-option") {
        this.props.setKnownRecipient(true);
        await this.setState({ recipient: value.email });

        const chatList = this.props.chats.map(
          (chat) =>
            chat.users.filter((email) => email != this.props.currentuser)[0]
        );
        const selectIndex = chatList.indexOf(this.state.recipient);
        this.props.setSelectedchatIndex(selectIndex);
        this.props.setSelectedmessages();
        this.props.changeSelectedIndexofChatSelector(selectIndex);

        const userList = this.props.users;
        const friendsList = userList.filter((user) =>
          chatList.includes(user.email)
        );

        this.props.setSelectedFirstName(friendsList[selectIndex].firstname);
        this.props.setSelectedLastName(friendsList[selectIndex].lastname);

        console.log(reason);
        console.log(value);
        console.log(this.state.recipient);
        console.log(selectIndex);

        //this.setRecipient();
      } else {
        //needs to decide what to do if ricipient is new
        this.props.setKnownRecipient(false);
        await this.setState({ recipient: value });
        this.props.setNewRecipient(this.state.recipient);

        console.log(reason);
        console.log(value);
        console.log(this.state.recipient);
      }
    }
  };

  componentDidMount = () => {
    this.props.setKnownRecipient(false);
    this.props.changeSelectedIndexofChatSelector(null);
  };
}

export default withStyles(newchatStyles)(NewChatComponent);
