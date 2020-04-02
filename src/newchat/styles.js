const newchatStyles = () => ({
  convoheader: {
    width: "70vw",
    height: "80px",
    //height: "50px"
    marginLeft: "30%",
    background: "violet",
    padding: "20px",
    position: "fixed",
    zIndex: "1",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center"
  },
  messages: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    width: "70vw",
    marginLeft: "30%",
    position: "absolute",
    //top: "50px",
    top: "80px",
    overflow: "auto",
    //height: "calc(100vh - 100px)",
    height: "calc(100vh - 130px)",
    background: "yellow",
    //overflowY: "scroll",
    boxSizing: "border-box",
    //padding: "10px",
    border: "10px yellow solid"

    //need to somehow get padding
    //maybe psudoelement?
    //the padding works without using display flex
  },
  messagesUser: {
    width: "30%",
    background: "coral",
    float: "right",
    clear: "both",
    padding: "20px",
    borderRadius: "15px",
    marginLeft: "65%",
    wordWrap: "break-word",
    boxSizing: "border-box",
    marginTop: "10px"
    //margin: "auto"
  },
  messagesOther: {
    width: "30%",
    background: "lightgreen",
    float: "left",
    clear: "both",
    padding: "20px",
    borderRadius: "15px",
    marginRight: "65%",
    wordWrap: "break-word",
    boxSizing: "border-box",
    marginTop: "10px"
    //margin: "auto"
  },
  autocompletestyles: {
    width: "600px"
  }
});

export default newchatStyles;
