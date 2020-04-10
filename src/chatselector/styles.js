const chatselectorStyles = () => ({
  main: {
    /*width: "30vw",
    background: "lightblue",
    left: "0",
    position: "fixed",
    overflow: "auto",
    height: "100vh",*/
    //boxSizing: "padding-box",
    //paddingTop: "60px",
  },
  list: {
    //position: "absolute",
    top: "80px",
    boxSizing: "border-box",
    width: "30vw",
    zIndex: "-1",
    position: "fixed",
    overflow: "auto",
    //height: "100vh",
    height: "calc(100vh - 80px)",
    background: "#F0F8FF",
    left: "0",
    borderRight: "1px solid grey",
  },
});

export default chatselectorStyles;
