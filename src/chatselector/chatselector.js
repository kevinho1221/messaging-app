import React from "react";
import chatselectorStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChatSelectorHeaderComponent from "../chatselectorheader/chatselectorheader";
import AvatarComponent from "../avatar/avatar";

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
      <AvatarComponent
        /*fullname={filteredOtherUser.map((user) =>
          [user.firstname, user.lastname].join(" ")
        )}*/
        firstinit={firstinit}
        lastinit={lastinit}
        fullname={firstname + " " + lastname}
      ></AvatarComponent>
    );
  };

  handleListItemClick = async (index) => {
    //set selected index so that selected chat stays highlighted
    await this.setState({ selectedIndex: index });

    await this.props.setSelectedchatIndex(index);
    await this.props.setSelectedmessages();
  };

  setSelectedIndex = async (index) => {
    await this.setState({ selectedIndex: index });
  };
}

export default withStyles(chatselectorStyles)(ChatSelectorComponent);
