import React from "react";
import chatselectorStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChatSelectorHeaderComponent from "../chatselectorheader/chatselectorheader";
import ChatSelectorAvatarComponent from "../chatselectoravatar/chatselectoravatar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
          setHasRead={this.props.setHasRead}
        ></ChatSelectorHeaderComponent>
        <div className={classes.list}>
          <List>
            {this.props.chats.map((chat, index) => {
              //console.log(chat.hasRead);
              //console.log(this.wasLastSender(chat));
              if (chat.hasRead == false && this.wasLastSender(chat) == false) {
                return (
                  <div key={index}>
                    <ListItem
                      button
                      selected={this.state.selectedIndex === index}
                      onClick={(e) => {
                        this.handleListItemClick(index);
                      }}
                      className={classes.unread}
                    >
                      <ListItemText
                        primary={
                          <div>
                            <Typography className={classes.listItemUnread}>
                              {this.setFullName(chat)}
                            </Typography>
                          </div>
                        }
                      ></ListItemText>
                    </ListItem>
                  </div>
                );
              } else {
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
              }
            })}
          </List>
        </div>
      </div>
    );
  }

  //checking if the current user is the last sender
  wasLastSender = (chat) => {
    const lastSender = chat.messages[chat.messages.length - 1].sender;
    return lastSender === this.props.currentuser;
  };

  setFullName = (chat) => {
    const otherUser = chat.users.filter(
      (user) => user !== this.props.currentuser
    );

    const filteredOtherUser = this.props.users.filter((user) =>
      otherUser.includes(user.email)
    );

    const firstname = filteredOtherUser
      .map((user) => user.firstname)
      .toString();
    const firstinit = firstname.charAt(0);

    const lastname = filteredOtherUser.map((user) => user.lastname).toString();
    const lastinit = lastname.charAt(0);

    return (
      <ChatSelectorAvatarComponent
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
    await this.props.setHasRead();
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
    //console.log(friendsList);
    await this.props.setSelectedFirstName(friendsList[index].firstname);
    await this.props.setSelectedLastName(friendsList[index].lastname);
  };
}

export default withStyles(chatselectorStyles)(ChatSelectorComponent);
