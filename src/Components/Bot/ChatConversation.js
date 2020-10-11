import React, { useState, useRef, useEffect } from "react";

import Colors from "../../constants/constants";

function ChatConversation(props) {
  const divRef = useRef(null);
  const [showoptions, setShowoptions] = useState(false);
  var dummyData = props.messageData;
  var options = props.options;
  let typing = props.typing;
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  setTimeout(() => {
    setShowoptions(false);
  }, 5000);
  return (
    <div className='convo'>
      <div style={styles.chatBubble}>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          {dummyData.map((value, index) => {
            return (
              <div
                key={index}
                style={
                  value.bot
                    ? styles.chatBubble.botBubble
                    : styles.chatBubble.senderBubble
                }
              >
                {value.message}
              </div>
            );
          })}
          {typing && (
            <div>
              <div className='typing-loader'></div>
            </div>
          )}
          <div className='options-list'>
            {!showoptions &&
              options.map((value, index) => {
                return (
                  <div
                    key={index}
                    className='options'
                    onClick={() => {
                      props.selectOptions(value);
                      setShowoptions(true);
                      // window.scrollTo(0,100)
                    }}
                  >
                    {value.user}
                  </div>
                );
              })}
          </div>
        </div>

        <div id='akshay' style={{ height: "1rem" }} ref={divRef}></div>
      </div>
    </div>
  );
}

const styles = {
  chatBubble: {
    flex: 1,
    height: "27rem",
    overflowY: "scroll",
    senderBubble: {
      borderRadius: "1rem 0 1rem 1rem",
      margin: "0.4rem 0.4rem 0.4rem 10rem",
      display: "inlineBlock",
      padding: "0.5rem",
      backgroundColor: Colors.primary,
      color: "white",
      textSize: "0.9rem",
      justifyContent: "flexEnd",
    },
    botBubble: {
      borderRadius: "0 1rem 1rem 1rem",
      margin: "0.4rem 10rem 0.4rem 0.4rem",
      display: "inlineBlock",
      padding: "0.2rem 0.5rem 0.2rem 0.5rem",
      textSize: "0.9rem",
      backgroundColor: "#f1f1f1",
    },
  },
};
export default ChatConversation;
