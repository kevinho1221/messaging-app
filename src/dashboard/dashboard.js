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
      newChatWindow: true,
      newRecipient: "",
      selectedFirstName: "",
      selectedLastName: "",
    };
    //ref so that dashboard can access chatselector methods
    this.chatSelectorComponent = React.createRef();
  }

  render() {
    const { classes } = this.props;

    if (this.state.email) {
      return (
        <div className={classes.main}>
          <ChatSelectorComponent
            chats={this.state.chats}
            currentuser={this.state.email}
            setSelectedchatIndex={this.setSelectedchatIndex}
            setSelectedmessages={this.setSelectedmessages}
            changeSelectedIndexofChatSelector={
              this.changeSelectedIndexofChatSelector
            }
            displayNewChatWindow={this.displayNewChatWindow}
            setHasSelectedOnce={this.setHasSelectedOnce}
            users={this.state.users}
            //creating ref so that dashboard can access the selectedindex state
            ref={this.chatSelectorComponent}
            //for the chat header of the convodisplay component
            setSelectedFirstName={this.setSelectedFirstName}
            setSelectedLastName={this.setSelectedLastName}
          ></ChatSelectorComponent>

          <ConvodisplayComponent
            email={this.state.email}
            selectedmessages={this.state.selectedmessages}
            //for newchatComponent
            chats={this.state.chats}
            users={this.state.users}
            currentuser={this.state.email}
            newChatWindow={this.state.newChatWindow}
            setSelectedchatIndex={this.setSelectedchatIndex}
            setSelectedmessages={this.setSelectedmessages}
            changeSelectedIndexofChatSelector={
              this.changeSelectedIndexofChatSelector
            }
            setNewRecipient={this.setNewRecipient}
            selectedFirstName={this.state.selectedFirstName}
            selectedLastName={this.state.selectedLastName}
            setSelectedFirstName={this.setSelectedFirstName}
            setSelectedLastName={this.setSelectedLastName}
            hasSelectedOnce={this.state.hasSelectedOnce}
            logout={this.logout}
          ></ConvodisplayComponent>

          <ChatInputComponent
            sendMessage={this.sendMessage}
            hasSelectedOnce={this.state.hasSelectedOnce}
            newChatWindow={this.state.newChatWindow}
          ></ChatInputComponent>
        </div>
      );
    } else {
      //this.props.history.push("/login");
      return <div></div>;
    }
  }

  logout = () => {
    firebase.auth().signOut();
    this.props.history.push("/login");
    console.log("loggedout");
  };

  setSelectedFirstName = async (firstname) => {
    await this.setState({ selectedFirstName: firstname });
    console.log(this.state.selectedFirstName);
  };

  setSelectedLastName = async (lastname) => {
    await this.setState({ selectedLastName: lastname });
    console.log(this.state.selectedLastName);
  };

  setNewRecipient = async (recipient) => {
    await this.setState({ newRecipient: recipient });
  };

  //To change highlighted selection in the chatselector after a
  //existing chat is selected from the new chat autocomplete box
  changeSelectedIndexofChatSelector = (index) => {
    this.chatSelectorComponent.current.setSelectedIndex(index);
  };

  displayNewChatWindow = async () => {
    await this.setState({ newChatWindow: true });
  };

  sendMessage = async (message) => {
    if (this.state.newChatWindow == true) {
      console.log("newchatwindow");
      console.log(this.state.newRecipient);
      if (await this.validRecipient()) {
        if (message.replace(/\s/g, "").length) {
          const newRecipientDocName = this.buildNewRecipientDocName();
          await firebase
            .firestore()
            .collection("chats")
            .doc(newRecipientDocName)
            .set({
              messages: [
                {
                  message: message,
                  sender: this.state.email,
                },
              ],
              users: [this.state.email, this.state.newRecipient],
            });
          //sets which chat selection is highlighted
          this.changeSelectedIndexofChatSelector(
            this.findIndexOfRecipient(this.state.newRecipient)
          );
          await this.setState({ newChatWindow: false });
          //sets the proper conversation
          this.setSelectedchatIndex(
            this.findIndexOfRecipient(this.state.newRecipient)
          );
          this.setSelectedmessages();
          console.log(this.findIndexOfRecipient(this.state.newRecipient));
        }
      } else {
        console.log("NOT A VALID EMAIL");
      }
    } else {
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
              timestamp: Date.now(),
            }),
          })
          .then(console.log("Message Sent"));
      }
    }
  };

  findIndexOfRecipient = (recipient) => {
    const chatList = this.state.chats.map(
      (chat) => chat.users.filter((email) => email != this.state.email)[0]
    );
    const selectIndex = chatList.indexOf(recipient);
    return selectIndex;
  };

  buildNewRecipientDocName = () => {
    const newRecipientDocName = [this.state.email, this.state.newRecipient]
      .sort()
      .join(":");
    return newRecipientDocName;
  };

  validRecipient = async () => {
    //Checking if the user is a valid user
    const getUsers = await firebase.firestore().collection("users").get();
    const users = getUsers.docs.map((doc) => doc.data().email);
    var valid = users.includes(this.state.newRecipient);
    console.log(valid);

    return valid;
  };

  getDocName = () => {
    const selectedUser = this.state.chats[
      this.state.selectedchatIndex
    ].users.filter((email) => email != this.state.email);
    const docName = [this.state.email, selectedUser].sort().join(":");
    //console.log(docName);
    return docName;
  };

  setHasSelectedOnce = async () => {
    //After the first selection, the chat input box should appear and stay there
    await this.setState({ hasSelectedOnce: true });
  };

  setSelectedchatIndex = (index) => {
    this.setState({ selectedchatIndex: index });

    //After the first selection, the chat input box should appear and stay there
    this.setHasSelectedOnce();

    this.setState({ newChatWindow: false });
    //console.log(this.state.selectedchatIndex);
    console.log(this.state.chats[this.state.selectedchatIndex].users);
  };

  setSelectedmessages = () => {
    this.setState({
      selectedmessages: this.state.chats[this.state.selectedchatIndex].messages,
    });
    //console.log(this.state.chats[this.state.selectedchatIndex].messages);
  };

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.setState({ email: user.email });
        console.log(user.email);
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", user.email)
          .onSnapshot(async (docSnapshot) => {
            const thechats = docSnapshot.docs.map((doc) => doc.data());
            //console.log(thechats);
            await this.setState({ chats: thechats });

            if (this.state.hasSelectedOnce === true) {
              this.setSelectedmessages();
            }
          });
        await firebase
          .firestore()
          .collection("users")
          .onSnapshot(async (docSnapshot) => {
            const theusers = docSnapshot.docs.map((doc) => doc.data());
            await this.setState({ users: theusers });
          });
      }
    });
  };
}

export default withStyles(dashboardStyles)(DashboardComponent);
