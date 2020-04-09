import React from "react";
import Button from "@material-ui/core/Button";
import loginStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from "@material-ui/core/Link";

const firebase = require("firebase");

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      currentUser: null,
      loginerror: "",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Paper className={classes.paperstyles}>
          <h1 align="center">Login Page</h1>
          <form onSubmit={this.submitForm}>
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
                      <AccountCircle />
                    </InputAdornment>
                  }
                ></Input>
              </div>
            </FormControl>
            <FormControl fullWidth>
              <div>
                <InputLabel htmlFor="passwordInput">
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

            <h5>{this.state.loginerror}</h5>

            <Button
              className={classes.buttonstyle}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Log In
            </Button>

            <Link onClick={this.toSignup} className={classes.linkstyle}>
              Sign Up!
            </Link>
          </form>
        </Paper>
      </div>
    );
  }

  submitForm = (e) => {
    e.preventDefault();

    if (this.state.email != "" && this.state.password != "") {
      this.toDashboard();
    } else {
      this.setState({
        loginerror: "Error: Please enter a username and password.",
      });
    }
  };

  userInputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toSignup = () => {
    this.props.history.push("/signup");
  };

  toDashboard = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        this.setState({ loginerror: err.toString() });
      });
  };
}

export default withStyles(loginStyles)(LoginComponent);
