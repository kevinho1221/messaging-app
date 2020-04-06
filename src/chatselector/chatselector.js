import React from "react";
import chatselectorStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChatSelectorHeaderComponent from "../chatselectorheader/chatselectorheader";
import ChatSelectorAvatarComponent from "../chatselectoravatar/chatselectoravatar";

class ChatSelectorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      //for which item is highlighted
      selectedIndex: null,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <ChatSelectorHeaderComponent
          displayNewChatWindow={this.props.displayNewChatWindow}
          setHasSelectedOnce={this.props.setHasSelectedOnce}
          chats={this.props.chats}
          users={this.props.users}
          currentuser={this.props.currentuser}
          setSelectedchatIndex={this.props.setSelectedchatIndex}
          setSelectedmessages={this.props.setSelectedmessages}
          changeSelectedIndexofChatSelector={
            this.props.changeSelectedIndexofChatSelector
          }
          setSelectedFirstName={this.props.setSelectedFirstName}
          setSelectedLastName={this.props.setSelectedLastName}
        ></ChatSelectorHeaderComponent>
        <div className={classes.list}>
          <List>
            {this.props.chats.map((chat, index) => {
              /*console.log(
                chat.users.filter(user => user !== this.props.currentuser)
              );*/
              return (
                <div key={index}>
                  <ListItem
                    button
                    selected={this.state.selectedIndex === index}
                    onClick={(e) => {
                      this.handleListItemClick(index);
                    }}
                  >
                    <ListItemText
                      primary={this.setFullName(chat)}
                    ></ListItemText>
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
      </div>
    );
  }

  setFullName = (chat) => {
    const otherUser = chat.users.filter(
      (user) => user !== this.props.currentuser
    );

    const filteredOtherUser = this.props.users.filter((user) =>
      otherUser.includes(user.email)
    );

    /*return filteredOtherUser.map((user) =>
      [user.firstname, user.lastname].join(" ")
    );*/

    const firstname = filteredOtherUser
      .map((user) => user.firstname)
      .toString();
    const firstinit = firstname.charAt(0);

    const lastname = filteredOtherUser.map((user) => user.lastname).toString();
    const lastinit = lastname.charAt(0);

    return (
      <ChatSelectorAvatarComponent
        /*fullname={filteredOtherUser.map((user) =>
          [user.firstname, user.lastname].join(" ")
        )}*/
        firstinit={firstinit}
        lastinit={lastinit}
        fullname={firstname + " " + lastname}
      ></ChatSelectorAvatarComponent>
    );
  };

  handleListItemClick = async (index) => {
    //set selected index so that selected chat stays highlighted
    await this.setState({ selectedIndex: index });

    await this.props.setSelectedchatIndex(index);
    await this.props.setSelectedmessages();
    await this.setSelectedFirstandLastName(index);
  };

  setSelectedIndex = async (index) => {
    await this.setState({ selectedIndex: index });
  };

  setSelectedFirstandLastName = async (index) => {
    //Send the first and last name of the selection to the dashboard
    const chatList = this.props.chats.map(
      (chat) => chat.users.filter((email) => email != this.props.currentuser)[0]
    );
    const userList = this.props.users;
    const friendsList = userList.filter((user) =>
      chatList.includes(user.email)
    );
    console.log(friendsList);
    await this.props.setSelectedFirstName(friendsList[index].firstname);
    await this.props.setSelectedLastName(friendsList[index].lastname);
  };
}

export default withStyles(chatselectorStyles)(ChatSelectorComponent);
