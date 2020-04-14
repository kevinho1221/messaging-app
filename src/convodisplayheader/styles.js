const convodisplayheaderStyles = () => ({
  main: {
    width: "70vw",
    height: "80px",
    //height: "50px"
    marginLeft: "30%",
    background: "#ABD7D8",
    padding: "20px",
    position: "fixed",
    zIndex: "1",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid grey",
  },

  avataruserWrapper: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    padding: "20px",
    boxSizing: "border-box",
    height: "50px",
    width: "50px",
  },
  name: {
    padding: "20px",
    boxSizing: "border-box",
  },
  button: {
    height: "40px",
    width: "100px",
    background: "#2C7379",
    color: "#FFFFFD",
    "&:hover": {
      background: "red",
    },
  },
  exitIcon: {
    fontSize: "40px",
  },
  iconbuttonstyles: {
    width: "70px",
    borderRadius: "10px",
    color: "#2C7379",
    marginRight: "20px",
  },
});

export default convodisplayheaderStyles;
