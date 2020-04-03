import React from "react";
import convodisplayStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import NewChatComponent from "../newchat/newchat";

class convodisplayComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      knownRecipient: false
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
            <div className={classes.convoheader} align="center">
              Conversation Header
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

  setKnownRecipient = async known => {
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

  /*componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        this.setState({ email: user.email });

        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", user.email)
          .get()
          .then(async snapshot => {
            console.log(
              snapshot.docs[this.props.selectedchatIndex].data().messages
            );
            await this.setState({
              selectedchat: snapshot.docs[this.props.selectedchatIndex].data()
                .messages
            });
          })
          .catch(err => {
            console.log("Error getting documents", err);
          });
      }
    });
  };*/
}

export default withStyles(convodisplayStyles)(convodisplayComponent);
