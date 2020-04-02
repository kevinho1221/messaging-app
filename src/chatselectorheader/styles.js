const chatselectorheaderStyles = () => ({
  main: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "pink",
    height: "60px"
  },
  autocompletestyles: {
    width: "300px"
    //borderRadius: "15px"
  },
  iconcontainer: {
    width: "40px",
    height: "40px",
    background: "lightgreen",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "&:hover": {
      cursor: "pointer"
    },
    "&:focus": {
      outline: "0",
      borderColor: "#45a29e"
    }
  },
  createstyles: {
    fontSize: "30px"
  },
  iconbuttonstyles: {
    width: "70px",
    borderRadius: "10px"
  }
});

export default chatselectorheaderStyles;
