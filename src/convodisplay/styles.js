const convodisplayStyles = () => ({
  convoheader: {
    width: "70vw",
    height: "50px",
    marginLeft: "30%",
    background: "violet",
    padding: "20px",
    position: "fixed",
    zIndex: "1",
    boxSizing: "border-box"
  },
  messages: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    width: "70vw",
    marginLeft: "30%",
    position: "absolute",
    top: "50px",
    overflow: "auto",
    height: "calc(100vh - 100px)",
    background: "yellow",
    overflowY: "scroll",
    boxSizing: "border-box",
    padding: "25px"
  },
  messagesUser: {
    width: "30%",
    background: "coral",
    float: "right",
    //position: "relative",
    clear: "both",
    padding: "20px",
    borderRadius: "15px",
    //marginRight: "20%",
    marginLeft: "65%",
    wordWrap: "break-word",
    marginTop: "10px"
  },
  messagesOther: {
    width: "30%",
    background: "lightgreen",
    float: "left",
    //position: "relative",
    clear: "both",
    padding: "20px",
    borderRadius: "15px",
    //marginLeft: "20%",
    marginRight: "65%",
    wordWrap: "break-word",
    marginTop: "10px"
  }
});

export default convodisplayStyles;
