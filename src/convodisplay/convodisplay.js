import React from "react";
import convodisplayStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";

const firebase = require("firebase");

class convodisplayComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      selectedchat: []
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.convoheader}>Conversation Header</div>
        <div className={classes.main}>Conversation Display Component</div>
        <div>
          {this.state.selectedchat.map((messages, index) => {
            return <div key={index}>{messages.message}</div>;
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
