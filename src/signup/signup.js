import React from "react";
import Button from "@material-ui/core/Button";
import signupStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { firestore } from "firebase";

const firebase = require("firebase");

class SignupComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "lisanho@test.com",
      password: "abcdefg"
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <h1>Sign Up Page</h1>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.addToFirebase}
        >
          Sign Up
        </Button>
      </div>
    );
  }

  addToFirebase = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        const theUser = {
          email: u.user.email
        };
        firestore()
          .collection("users")
          .doc(this.state.email)
          .set(theUser)
          .then(this.props.history.push("/dashboard"));
        console.log("signup up successfully");
        console.log(u);
      })
      .catch(err => {
        console.log(err.toString());
      });
  };
}

export default withStyles(signupStyles)(SignupComponent);
