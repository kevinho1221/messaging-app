import React from "react";
import ChatSelectorComponent from "../chatselector/chatselector";
import dashboardStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import ConvodisplayComponent from "../convodisplay/convodisplay";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      chats: [],
      selectedchatIndex: 0,
      selectedmessages: []
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <ChatSelectorComponent
          chats={this.state.chats}
          currentuser={this.state.email}
          setSelectedchatIndex={this.setSelectedchatIndex}
          setSelectedmessages={this.setSelectedmessages}
        ></ChatSelectorComponent>
        <ConvodisplayComponent
          selectedchatIndex={this.state.selectedchatIndex}
        ></ConvodisplayComponent>
      </div>
    );
  }

  setSelectedchatIndex = async index => {
    await this.setState({ selectedchatIndex: index });
    console.log(this.state.selectedchatIndex);
  };

  setSelectedmessages = async () => {
    await this.setState({
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
            //console.log(this.state.chats);
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
