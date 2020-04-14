const chatinputStyles = () => ({
  main: {
    width: "70vw",
    marginLeft: "30%",
    padding: "10px",
    position: "fixed",
    zIndex: "1",
    bottom: 0,
    height: "70px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid grey",
    background: "#ABD7D8",
  },
  chatTextBox: {
    width: "87%",
    marginLeft: "30px",
    marginRight: "30px",
    border: "1px solid grey",
    borderRadius: "10px",
    padding: "8px",
    background: "#FFFFFD",
  },
  buttonstyle: {
    height: "40px",
    background: "#2C7379",
    color: "#FFFFFD",
  },
  sendIcon: {
    fontSize: "35px",
  },
  iconbuttonstyles: {
    width: "70px",
    borderRadius: "10px",
    color: "#2C7379",
    marginRight: "20px",
  },
});

export default chatinputStyles;
