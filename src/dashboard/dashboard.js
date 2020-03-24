import React from "react";
import ChatSelectorComponent from "../chatselector/chatselector";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      chats: []
    };
  }

  render() {
    return (
      <div>
        <div>Dashboard Page</div>
        <ChatSelectorComponent chats={this.state.chats}></ChatSelectorComponent>
      </div>
    );
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        this.setState({ email: user.email });
        console.log(user.email);
        await firebase
          .firestore()
          .collection("chats")
          .get()
          .then(async snapshot => {
            //await this.setState({ chats: snapshot.docs});

            console.log(snapshot.docs[0].data());
            const thechats = snapshot.forEach(doc => {});

            /*snapshot.forEach(async doc => {
              console.log(doc.id);
              console.log(doc.data().messages);
              this.setState({ chats: doc.data() });
              console.log(this.state.chats);
            });*/
          })
          .catch(err => {
            console.log("Error getting documents", err);
          });
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

export default DashboardComponent;
