import React from "react";
import convodisplayStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import NewChatComponent from "../newchat/newchat";
import ConvoDisplayHeaderComponent from "../convodisplayheader/convodisplayheader";

class convodisplayComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      knownRecipient: false,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.newChatWindow ? (
          <div>
            <NewChatComponent
              chats={this.props.chats}
              users={this.props.users}
              currentuser={this.props.currentuser}
              setKnownRecipient={this.setKnownRecipient}
              setSelectedchatIndex={this.props.setSelectedchatIndex}
              setSelectedmessages={this.props.setSelectedmessages}
              changeSelectedIndexofChatSelector={
                this.props.changeSelectedIndexofChatSelector
              }
              setNewRecipient={this.props.setNewRecipient}
              setSelectedFirstName={this.props.setSelectedFirstName}
              setSelectedLastName={this.props.setSelectedLastName}
              logout={this.props.logout}
              setHasRead={this.props.setHasRead}
            ></NewChatComponent>

            {this.state.knownRecipient ? (
              <div className={classes.messages} id="convodisplay">
                {[...this.props.selectedmessages]
                  .reverse()
                  .map((messages, index) => {
                    if (messages.sender === this.props.email) {
                      return (
                        <div className={classes.messagesUser} key={index}>
                          {messages.message}
                        </div>
                      );
                    } else {
                      return (
                        <div className={classes.messagesOther} key={index}>
                          {messages.message}
                        </div>
                      );
                    }
                  })}
              </div>
            ) : (
              <div className={classes.messages}></div>
            )}
          </div>
        ) : (
          <div>
            <div align="center">
              <ConvoDisplayHeaderComponent
                className={classes.convoheader}
                firstname={this.props.selectedFirstName}
                lastname={this.props.selectedLastName}
                hasSelectedOnce={this.props.hasSelectedOnce}
                logout={this.props.logout}
              ></ConvoDisplayHeaderComponent>
            </div>
            <div className={classes.messages} id="convodisplay">
              {[...this.props.selectedmessages]
                .reverse()
                .map((messages, index) => {
                  if (messages.sender === this.props.email) {
                    return (
                      <div className={classes.messagesUser} key={index}>
                        {messages.message}
                      </div>
                    );
                  } else {
                    return (
                      <div className={classes.messagesOther} key={index}>
                        {messages.message}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        )}
      </div>
    );
  }

  setKnownRecipient = async (known) => {
    await this.setState({ knownRecipient: known });
    //console.log(this.state.knownRecipient);
  };

  componentDidMount = () => {
    const container = document.getElementById("convodisplay");
    if (container) container.scrollTo(0, container.scrollHeight);
  };
  componentDidUpdate = () => {
    const container = document.getElementById("convodisplay");
    if (container) container.scrollTo(0, container.scrollHeight);
  };
}

export default withStyles(convodisplayStyles)(convodisplayComponent);
