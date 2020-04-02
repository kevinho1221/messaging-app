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
    /*const friends = [
      { email: "kevinho@test.com", firstname: "Lisa", lastname: "Nho" },
      { email: "mike@test.com", firstname: "Michael", lastname: "Yang" }
    ];*/

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
            clearOnEscape
            id="friends-list"
            options={friendsList}
            getOptionLabel={option =>
              [option.firstname, option.lastname].join(" ")
            }
            className={classes.autocompletestyles}
            edge="start"
            onChange={(event, value) => this.setRecipient(value)}
            renderInput={params => (
              <TextField {...params} label="To:" variant="outlined" />
            )}
          />
        </div>

        <div className={classes.messages} id="convodisplay"></div>
      </div>
    );
  }

  setRecipient = async value => {
    await this.setState({ recipient: value.email });
    console.log(this.state.recipient);
  };
}

export default withStyles(newchatStyles)(NewChatComponent);
