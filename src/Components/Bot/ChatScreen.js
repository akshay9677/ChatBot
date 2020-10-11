import React from "react";

import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatConversation from "./ChatConversation";
import "./ChatScreen.css";

function ChatScreen(props) {
  return (
    <div className='chat-screen-bot'>
      <div style={styles.chatBox}>
        <ChatHeader onClicks={props.closeClick} />
        <div>
          <ChatConversation
            messageData={props.messages}
            selectOptions={(value) => props.selectOptions(value)}
            options={props.options}
            typing={props.typing}
          />
        </div>
        <ChatBox
          sendMessage={(value) => props.onSend(value)}
          isActionPresent={props.isActionPresent}
        />
      </div>
    </div>
  );
}
const styles = {
  chatBox: {
    backgroundColor: "white",
    width: "24rem",
    height: "38rem",
    borderRadius: "1rem",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "6px 6px 8px #CCC",
  },
};

export default ChatScreen;
