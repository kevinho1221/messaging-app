import React from "react";
import convodisplayStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";

class convodisplayComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.convoheader} align="center">
          Conversation Header
        </div>
        <div className={classes.messages}>
          {this.props.selectedmessages.map((messages, index) => {
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
    );
  }

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
