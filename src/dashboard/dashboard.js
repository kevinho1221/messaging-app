import React from "react";
import ChatSelectorComponent from "../chatselector/chatselector";
import dashboardStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import ConvodisplayComponent from "../convodisplay/convodisplay";
import ChatInputComponent from "../chatinput/chatinput";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      chats: [],
      selectedchatIndex: 0,
      selectedmessages: [],
      hasSelectedOnce: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        {
          //CREATE A HEADING COMPONENT HERE}
          //first add ability to send new messages and start new conversations
          //then probably need to recreate all the users over again so that the have first and last names
          //then use those to create the avatars
        }
        <ChatSelectorComponent
          chats={this.state.chats}
          currentuser={this.state.email}
          setSelectedchatIndex={this.setSelectedchatIndex}
          setSelectedmessages={this.setSelectedmessages}
        ></ChatSelectorComponent>
        <ConvodisplayComponent
          email={this.state.email}
          selectedmessages={this.state.selectedmessages}
        ></ConvodisplayComponent>
        <ChatInputComponent
          sendMessage={this.sendMessage}
          hasSelectedOnce={this.state.hasSelectedOnce}
        ></ChatInputComponent>
      </div>
    );
  }

  sendMessage = message => {
    if (message.replace(/\s/g, "").length) {
      const docName = this.getDocName();
      firebase
        .firestore()
        .collection("chats")
        .doc(docName)
        .update({
          messages: firebase.firestore.FieldValue.arrayUnion({
            message: message,
            sender: this.state.email,
            timestamp: Date.now()
          })
        })
        .then(console.log("Message Sent"));
    }
  };

  getDocName = () => {
    const selectedUser = this.state.chats[
      this.state.selectedchatIndex
    ].users.filter(email => email != this.state.email);
    const docName = [this.state.email, selectedUser].sort().join(":");
    //console.log(docName);
    return docName;
  };

  setSelectedchatIndex = index => {
    this.setState({ selectedchatIndex: index });
    this.setState({ hasSelectedOnce: true });
    console.log(this.state.selectedchatIndex);
    console.log(this.state.chats[this.state.selectedchatIndex].users);
  };

  setSelectedmessages = () => {
    this.setState({
      selectedmessages: this.state.chats[this.state.selectedchatIndex].messages
    });
    console.log(this.state.chats[this.state.selectedchatIndex].messages);
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        this.setState({ email: user.email });
        console.log(user.email);
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", user.email)
          .onSnapshot(async docSnapshot => {
            const thechats = docSnapshot.docs.map(doc => doc.data());
            //console.log(thechats);
            await this.setState({ chats: thechats });

            if (this.state.hasSelectedOnce === true) {
              this.setSelectedmessages();
            }

            //so that the convodisplay updates
          });

        /*.then(async snapshot => {
            //await this.setState({ chats: snapshot.docs});

            console.log(snapshot.docs);
            const thechats = snapshot.docs.map(doc => {
              doc.data();
            });
            console.log(thechats);
            //await this.setState({ chats: thechats });
            //console.log(this.state.chats);

            snapshot.forEach(async doc => {
              console.log(doc.id);
              console.log(doc.data().messages);
              this.setState({ chats: doc.data() });
              console.log(this.state.chats);
            });
          })
          .catch(err => {
            console.log("Error getting documents", err);
          });*/
      }
    });

    /*var chatQuery = chatRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });*/
  };
}

export default withStyles(dashboardStyles)(DashboardComponent);
