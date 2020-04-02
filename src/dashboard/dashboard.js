import React from "react";
import ChatSelectorComponent from "../chatselector/chatselector";
import dashboardStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import ConvodisplayComponent from "../convodisplay/convodisplay";
import ChatInputComponent from "../chatinput/chatinput";
import NewChatComponent from "../newchat/newchat";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      users: [],
      chats: [],
      selectedchatIndex: 0,
      selectedmessages: [],
      hasSelectedOnce: false,
      newChatWindow: false
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
          displayNewChatWindow={this.displayNewChatWindow}
        ></ChatSelectorComponent>
        {this.state.newChatWindow ? (
          <NewChatComponent
            chats={this.state.chats}
            users={this.state.users}
            currentuser={this.state.email}
          ></NewChatComponent>
        ) : (
          <ConvodisplayComponent
            email={this.state.email}
            selectedmessages={this.state.selectedmessages}
          ></ConvodisplayComponent>
        )}

        <ChatInputComponent
          sendMessage={this.sendMessage}
          hasSelectedOnce={this.state.hasSelectedOnce}
          newChatWindow={this.state.newChatWindow}
        ></ChatInputComponent>
      </div>
    );
  }

  displayNewChatWindow = async () => {
    await this.setState({ newChatWindow: true });
  };

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

    //After the first selection, the chat input box should appear and stay there
    this.setState({ hasSelectedOnce: true });

    this.setState({ newChatWindow: false });
    //console.log(this.state.selectedchatIndex);
    console.log(this.state.chats[this.state.selectedchatIndex].users);
  };

  setSelectedmessages = () => {
    this.setState({
      selectedmessages: this.state.chats[this.state.selectedchatIndex].messages
    });
    console.log(this.state.chats[this.state.selectedchatIndex].messages);
  };

  componentWillMount = () => {
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
          });
        await firebase
          .firestore()
          .collection("users")
          .onSnapshot(async docSnapshot => {
            const theusers = docSnapshot.docs.map(doc => doc.data());
            await this.setState({ users: theusers });
          });
      }
    });
  };
}

export default withStyles(dashboardStyles)(DashboardComponent);
