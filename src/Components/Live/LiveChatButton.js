import React from "react";
import "./LiveChatButton.css";
import colors from "../../constants/constants";
function ChatButton(props) {
  return (
    <div className='button-container'>
      <div
        style={props.clickSense ? styles.btn : styles.btn2}
        onClick={props.onPress}
      >
        <i
          className='fas fa-headset'
          style={{
            overflow: "hidden",
            fontSize: "1.5rem",
            margin: "0.5rem 0rem 0rem 0.5rem",
            color: "white",
          }}
        ></i>
      </div>
    </div>
  );
}

const styles = {
  btn: {
    position: "fixed",
    width: 50,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  btn2: {
    position: "fixed",
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: colors.main,
  },
};

export default ChatButton;
