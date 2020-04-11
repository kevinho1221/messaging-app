import React from "react";
import chatselectorheaderStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Create from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class ChatSelectorHeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      autocompleteValue: "",
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
    console.log(this.props.chats);

    return (
      <div className={classes.main}>
        <Autocomplete
          clearOnEscape
          value={this.state.autocompleteValue}
          id="selector-friends-list"
          options={friendsList}
          getOptionLabel={(option) => {
            if (option.firstname) {
              return [option.firstname, option.lastname].join(" ");
            } else {
              return option;
            }
          }}
          className={classes.autocompletestyles}
          onChange={(event, value, reason) =>
            this.onChangeHandler(event, value, reason)
          }
          edge="start"
          renderInput={(params) => (
            <TextField {...params} label="Search Friends" variant="outlined" />
          )}
        />
        <IconButton
          className={classes.iconbuttonstyles}
          onClick={this.handleNewMessageClick}
          color="primary"
        >
          <Create className={classes.createstyles} />
        </IconButton>
      </div>
    );
  }

  onChangeHandler = async (event, value, reason) => {
    if (value) {
      if (reason == "select-option") {
        const chatList = this.props.chats.map(
          (chat) =>
            chat.users.filter((email) => email != this.props.currentuser)[0]
        );
        const selectIndex = chatList.indexOf(value.email);
        console.log(selectIndex);
        await this.props.setSelectedchatIndex(selectIndex);
        await this.props.setSelectedmessages();
        await this.props.changeSelectedIndexofChatSelector(selectIndex);

        await this.props.setSelectedFirstName(value.firstname);
        await this.props.setSelectedLastName(value.lastname);
      }

      //this.props.changeSelectedIndexofChatSelector(selectIndex);
    }
  };

  handleNewMessageClick = () => {
    this.props.displayNewChatWindow();
    this.props.setHasSelectedOnce();
  };
}

export default withStyles(chatselectorheaderStyles)(
  ChatSelectorHeaderComponent
);
