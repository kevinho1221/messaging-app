import React from "react";
import Button from "@material-ui/core/Button";
import loginStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const firebase = require("firebase");

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "kevinho@test.com",
      password: "abcdefg",
      currentUser: null,
      loginerror: ""
    };
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes.main}>
        <Paper elevation="2">
          <h1>Login Page</h1>
          <Typography variant="h4">Login page testing</Typography>
          <h3>{this.state.loginerror}</h3>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.toDashboard}
          >
            Log In
          </Button>
        </Paper>
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
        this.setState({ loginerror: err.toString() });
        console.log("Error:" + err.toString());
      });
  };
}

export default withStyles(loginStyles)(LoginComponent);
