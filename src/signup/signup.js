import React from "react";
import Button from "@material-ui/core/Button";
import signupStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

class SignupComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "kevinho@test.com",
      password: "abcd"
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

  addToFirebase = () => {};
}

export default withStyles(signupStyles)(SignupComponent);
