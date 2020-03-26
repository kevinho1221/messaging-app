import React from "react";
import chatselectorStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class ChatSelectorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <List>
          {this.props.chats.map((chat, index) => {
            console.log(
              chat.users.filter(user => user !== this.props.currentuser)
            );
            return (
              <div key={index}>
                <ListItem
                  button
                  selected={this.state.selectedIndex === index}
                  onClick={e => {
                    this.handleListItemClick(index);
                  }}
                >
                  <ListItemText
                    primary={chat.users.filter(
                      user => user !== this.props.currentuser
                    )}
                  ></ListItemText>
                </ListItem>
              </div>
            );
            //return <p key={index}>{chat.messages[0].users}</p>;
          })}
        </List>
      </div>
    );
  }
  handleListItemClick = index => {
    this.props.setSelectedchatIndex(index);
    this.props.setSelectedmessages();
  };
}

export default withStyles(chatselectorStyles)(ChatSelectorComponent);
