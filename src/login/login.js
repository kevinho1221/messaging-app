import React from "react";
import Button from "@material-ui/core/Button";
import loginStyles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

class LoginComponent extends React.Component {
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

  toDashboard = () => {
    this.props.history.push("/dashboard");
  };
}

export default withStyles(loginStyles)(LoginComponent);
