import React from "react";

import Colors from "../../constants";

function ChatHeader(props) {
  return (
    <div style={styles.chatHeader}>
      <div style={styles.chatHeader.chatLogo.online}></div>
      <div style={styles.chatHeader.chatLogo}>
        <img
          alt="logo"
          style={{ overflow: "hidden" }}
          src="https://image.flaticon.com/icons/svg/838/838479.svg"
        ></img>
      </div>
      <div style={styles.chatHeader.chatText}>
        <div>Chat Bot</div>
      </div>
      <div onClick={props.onClicks} style={styles.chatHeader.chatClose}>
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
    </div>
  );
}
const styles = {
  chatHeader: {
    height: "2rem",
    backgroundColor: Colors.primary,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    chatLogo: {
      height: "2.6rem",
      width: "2.6rem",
      borderRadius: "1rem",
      backgroundColor: "white",
      margin: "0.9rem 0.2rem 0.2rem 0.6rem",
      overflow: "hidden",
      online: {
        height: "0.8rem",
        width: "0.8rem",
        borderRadius: "0.4rem",
        backgroundColor: "#16FA11",
        left: "2.8rem",
        top: "2.7rem",
        position: "absolute",
      },
    },
    chatText: {
      color: "white",
      margin: "0.1rem 0rem 0rem 0.8rem",
      fontSize: "20px",
      marginTop: "1rem",
    },
    chatClose: {
      position: "absolute",
      color: "white",
      right: "0.9rem",
      top: "1.4rem",
    },
  },
};
export default ChatHeader;
