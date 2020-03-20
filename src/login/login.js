import React from "react";
import Button from "@material-ui/core/Button";
import loginStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const firebase = require("firebase");

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "kevinho@test.com",
      password: "abcdefghij",
      currentUser: null
    };
  }

  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div className={classes.main}>
        <h1>Login Page</h1>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.toDashboard}
        >
          Log In
        </Button>
      </div>
    );
  }

  toDashboard = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error:" + err.toString());
      });
  };
}

export default withStyles(loginStyles)(LoginComponent);
