const convodisplayStyles = () => ({
  convoheader: {
    width: "70%",
    marginLeft: "30%",
    background: "violet",
    padding: "20px",
    position: "fixed"
  },
  messages: {
    margin: "20px",
    width: "70%",
    marginLeft: "30%",
    position: "absolute",
    top: "40px",
    overflowY: "scroll",
    overflow: "auto",
    height: "100vh"
  },
  messagesUser: {
    width: "30%",
    background: "coral",
    float: "right",
    position: "relative",
    clear: "both",
    padding: "20px",
    borderRadius: "15px",
    marginRight: "1%",
    wordWrap: "break-word",
    marginTop: "10px"
  },
  messagesOther: {
    width: "30%",
    background: "lightgreen",
    float: "left",
    position: "relative",
    clear: "both",
    padding: "20px",
    borderRadius: "15px",
    marginLeft: "1%",
    wordWrap: "break-word",
    marginTop: "10px"
  }
});

export default convodisplayStyles;
