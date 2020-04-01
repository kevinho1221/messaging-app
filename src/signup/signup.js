import React from "react";
import Button from "@material-ui/core/Button";
import signupStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { firestore } from "firebase";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";

const firebase = require("firebase");

class SignupComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordconf: "",
      signuperror: ""
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Paper>
          <h1 align="center">Sign Up!</h1>

          <form onSubmit={this.submitForm}>
            <FormControl fullWidth>
              <div>
                <InputLabel htmlFor="firstnameInput">First Name</InputLabel>
                <Input
                  fullWidth
                  name="firstname"
                  id="firstnameInput"
                  onChange={this.userInputHandler}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                ></Input>
              </div>
            </FormControl>
            <FormControl fullWidth>
              <div>
                <InputLabel htmlFor="lastnameInput">Last Name</InputLabel>
                <Input
                  fullWidth
                  name="lastname"
                  id="lastnameInput"
                  onChange={this.userInputHandler}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                ></Input>
              </div>
            </FormControl>
            <FormControl fullWidth>
              <div>
                <InputLabel htmlFor="emailInput">Enter Your Email</InputLabel>
                <Input
                  fullWidth
                  name="email"
                  id="emailInput"
                  onChange={this.userInputHandler}
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                ></Input>
              </div>
            </FormControl>
            <FormControl fullWidth>
              <div>
                <InputLabel
                  htmlFor="passwordInput"
                  className={classes.inputstyle}
                >
                  Enter Your Password
                </InputLabel>
                <Input
                  type="password"
                  fullWidth
                  name="password"
                  id="passwordInput"
                  onChange={this.userInputHandler}
                  startAdornment={
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  }
                ></Input>
              </div>
            </FormControl>
            <FormControl fullWidth>
              <div>
                <InputLabel htmlFor="passwordconfInput">
                  Confirm Your Password
                </InputLabel>
                <Input
                  type="password"
                  fullWidth
                  name="passwordconf"
                  id="passwordconfInput"
                  onChange={this.userInputHandler}
                  startAdornment={
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  }
                ></Input>
              </div>
            </FormControl>

            <h5>{this.state.signuperror}</h5>
            <Button
              className={classes.buttonstyle}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign Up
            </Button>
            <Link onClick={this.toLogin} className={classes.linkstyle}>
              Log In!
            </Link>
          </form>
        </Paper>
      </div>
    );
  }

  toLogin = () => {
    this.props.history.push("/login");
  };

  submitForm = e => {
    e.preventDefault();

    if (this.state.password === this.state.passwordconf) {
      this.addToFirebase();
    } else {
      this.setState({ signuperror: "The passwords do not match!" });
    }
  };

  userInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addToFirebase = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        const theUser = {
          email: u.user.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname
        };
        firestore()
          .collection("users")
          .doc(this.state.email)
          .set(theUser)
          .then(this.props.history.push("/dashboard"));
        console.log("signup up successfully");
        //console.log(u);
      })
      .catch(err => {
        this.setState({ signuperror: err.toString() });
        console.log(err.toString());
      });
  };
}

export default withStyles(signupStyles)(SignupComponent);
