import React from "react";
import chatselectorheaderStyles from "./styles.js";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Create from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class ChatSelectorHeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;
    const top100Films = [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: 1972 }
    ];
    return (
      <div className={classes.main}>
        <Autocomplete
          clearOnEscape
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={option => option.title}
          className={classes.autocompletestyles}
          edge="start"
          renderInput={params => (
            <TextField {...params} label="Search Friends" variant="outlined" />
          )}
        />
        <IconButton
          className={classes.iconbuttonstyles}
          onClick={this.handleOnClick}
        >
          <Create className={classes.createstyles} />
        </IconButton>
      </div>
    );
  }

  handleOnClick = () => {
    this.props.displayNewChatWindow();
  };
}

export default withStyles(chatselectorheaderStyles)(
  ChatSelectorHeaderComponent
);
