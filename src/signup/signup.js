import React from "react";
import Button from "@material-ui/core/Button";
import signupStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const firebase = require("firebase");

class SignupComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "kevinho@test.com",
      password: "abcdefghi"
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
        console.log("signup up successfully");
      })
      .catch(err => {
        console.log("Error:" + err.toString());
      });
  };
}

export default withStyles(signupStyles)(SignupComponent);
