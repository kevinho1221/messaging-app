import React from "react";
import newchatStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class NewChatComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      recipient: ""
    };
  }

  render() {
    const { classes } = this.props;
    const friends = [
      { email: "kevinho@test.com", firstname: "Lisa", lastname: "Nho" },
      { email: "mike@test.com", firstname: "Michael", lastname: "Yang" }
    ];

    const chatList = this.props.chats.map(
      chat => chat.users.filter(email => email != this.props.currentuser)[0]
    );

    const userList = this.props.users;
    const friendsList = userList.filter(user => chatList.includes(user.email));
    console.log(chatList);
    console.log(userList);
    console.log(friendsList);

    return (
      <div>
        <div className={classes.convoheader}>
          <Autocomplete
            id="friends-list"
            freeSolo
            clearOnEscape
            options={friendsList}
            /*getOptionLabel={option =>
              option.firstname
                ? [option.firstname, option.lastname].join(" ")
                : option
            }*/
            getOptionLabel={option => {
              if (option.firstname) {
                return [option.firstname, option.lastname].join(" ");
              } else {
                return option;
              }
            }}
            /*options={friendsList.map(friend =>
              [friend.firstname, friend.lastname].join(" ")
            )}*/
            className={classes.autocompletestyles}
            edge="start"
            //onKeyDown={this.onKeyDownHandler}
            /*this onChange causes custom input to disappear after pressing enter, 
            it was because state was being changed*/
            onChange={(event, value, reason) =>
              this.onChangeHandler(event, value, reason)
            }
            onClose={(event, reason) => {
              //const recipient = this.state.recipient;
              this.handleClose(event, this.state.recipient, reason);
            }}
            renderInput={params => (
              <TextField {...params} label="To:" variant="outlined" />
            )}
          />
        </div>
      </div>
    );
  }

  handleClose = async (event, value, reason) => {
    if (reason == "select-option") {
      console.log(reason);
      //console.log(value);
      var autocompleteValue = document.getElementById("friends-list");
      var thevalue = autocompleteValue.getAttribute("value");
      console.log(thevalue);
    } else {
      console.log("other");
      var autocompleteValue = document.getElementById("friends-list");
      var thevalue = autocompleteValue.getAttribute("value");
      console.log(thevalue);
    }
  };

  onChangeHandler = async (event, value, reason) => {
    if (value) {
      if (reason == "select-option") {
        this.props.setKnownRecipient(true);
        await this.setState({ recipient: value.email });

        const chatList = this.props.chats.map(
          chat => chat.users.filter(email => email != this.props.currentuser)[0]
        );
        const selectIndex = chatList.indexOf(this.state.recipient);
        this.props.setSelectedchatIndex(selectIndex);
        this.props.setSelectedmessages();

        console.log(reason);
        console.log(value);
        console.log(this.state.recipient);
        console.log(selectIndex);

        //this.setRecipient();
      } else {
        this.props.setKnownRecipient(false);
        await this.setState({ recipient: value });

        console.log(reason);
        console.log(value);
        console.log(this.state.recipient);
      }
    }
  };

  setRecipient = async () => {
    var autocompleteValue = document.getElementById("friends-list");
    var thevalue = autocompleteValue.value;
    //await this.setState({ recipient: value.email });

    //console.log(this.state.recipient);
    console.log(thevalue);
  };

  /*
  setRecipient = async (event, value) => {
    if (value) {
      await this.setState({ recipient: value.email });
      const autocompleteValue = document.getElementById("friends-list");
      autocompleteValue.value = [value.firstname, value.lastname].join(" ");
      //console.log(this.state.recipient);
      console.log(value);
    }
  };*/
}

export default withStyles(newchatStyles)(NewChatComponent);
