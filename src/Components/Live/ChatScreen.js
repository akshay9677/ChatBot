import React, { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatConversation from "./ChatConversation";
import DetailsScreen from "./DetailsScreen";
import "./ChatScreen.css";

function ChatScreen(props) {
  const [showDetailScreen, setShowDetail] = useState(true);

  function handleAddDetail(text) {
    setShowDetail(false);
    props.handleAddDetail(text);
  }
  return (
    <div className='chat-screen-bot'>
      <div style={styles.chatBox}>
        <ChatHeader onClicks={props.closeClick} />
        <div>
          {showDetailScreen ? (
            <DetailsScreen addDetail={handleAddDetail} />
          ) : (
            <ChatConversation
              messageData={props.messages}
              typing={props.typing}
            />
          )}
        </div>
        {!showDetailScreen && (
          <ChatBox sendMessage={(value) => props.onSend(value)} />
        )}
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
