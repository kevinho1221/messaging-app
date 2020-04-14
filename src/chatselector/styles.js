const chatselectorStyles = () => ({
  main: {},
  list: {
    top: "80px",
    boxSizing: "border-box",
    width: "30vw",
    zIndex: "-1",
    position: "fixed",
    overflow: "auto",
    height: "calc(100vh - 80px)",
    background: "#ABD7D8",
    left: "0",
    borderRight: "1px solid grey",
  },
  listItemContainer: {
    backgroundColor: "red",
    borderColor: "red",
  },
  listItemUnread: {
    fontWeight: "900",
    marginRight: "30px",
  },
  unread: {
    background: "#67A9A8",
  },
  unreadDot: {
    color: "#1976d2",
    marginLeft: "300px",
    marginRight: "10px",
  },
});

export default chatselectorStyles;
