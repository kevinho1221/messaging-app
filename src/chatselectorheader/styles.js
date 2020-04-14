const chatselectorheaderStyles = () => ({
  main: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#ABD7D8",
    height: "80px",
    position: "fixed",
    width: "30vw",
    borderRight: "1px solid grey",
    zIndex: "1",
    boxSizing: "border-box",
    //borderColor: "coral",
    //marginTop: "-60px",
  },
  autocompletestyles: {
    width: "300px",
    padding: "20px",

    //borderRadius: "15px"
  },
  /*iconcontainer: {
    width: "40px",
    height: "40px",
    background: "lightgreen",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "0",
      borderColor: "#45a29e",
    },
  },*/
  createstyles: {
    fontSize: "30px",
  },
  iconbuttonstyles: {
    width: "70px",
    borderRadius: "10px",
    color: "#2C7379",
    marginRight: "20px",
  },
  suggestedItem: {
    background: "#FFFFFD",
    borderRadius: "10px",
    border: "1px solid grey",
  },
});

export default chatselectorheaderStyles;
