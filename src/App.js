import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatButton from "./Components/ChatButton";
import ChatScreen from "./Components/ChatScreen";
import "./App.css";
import Colors from "./constants";

var options = null;

function App(props) {
  const [chatScreen, setChatScreen] = useState(false);
  const [data, setData] = useState([]);
  const [initMessage, setInitMessage] = useState(true);
  const [typing, setTyping] = useState(false);
  const [initDelay, setInitDelay] = useState(false);
  let comp = null;

  setTimeout(() => {
    setInitDelay(true);
  }, 2000);

  useEffect(() => {
    axios
      .post("http://localhost:8080", { option: "start" })
      .then(({ data }) => {
        let newData = {
          message: data.bot,
          bot: true,
        };
        setData([newData]);
        options = data.options;
      });
  }, []);

  function handleClick() {
    setInitMessage(false);
    setChatScreen(!chatScreen);
  }
  function handleSendMessage(textM) {
    let newData = {
      message: textM,
      bot: false,
    };
    setData((prevData) => {
      return [...prevData, newData];
    });
  }
  function handleOptions(value) {
    axios.post("http://localhost:8080", { option: value }).then(({ data }) => {
      let newSenderData = {
        message: value,
        bot: false,
      };
      options = [];
      setData((prevData) => {
        return [...prevData, newSenderData];
      });

      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        options = data.options;
        let newData = {
          message: data.bot,
          bot: true,
        };
        setData((prevData) => {
          return [...prevData, newData];
        });
      }, 3000);
    });
  }
  if (chatScreen) {
    comp = (
      <div>
        <div style={{ textAlign: "center" }}>
          <ChatScreen
            onSend={handleSendMessage}
            messages={data}
            closeClick={handleClick}
            selectOptions={handleOptions}
            options={options}
            typing={typing}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      {initDelay && (
        <div>
          {!chatScreen && initMessage && (
            <div style={styles.chatInitMessage}>
              Hey There, I know it is a hard time!
            </div>
          )}
          <div style={chatScreen ? styles.chatContainer : styles.chatBtn}>
            {chatScreen ? (
              comp
            ) : (
              <ChatButton clickSense={chatScreen} onPress={handleClick} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  chatContainer: {
    position: "fixed",
    bottom: "2rem",
    right: "1.7rem",
  },
  chatBtn: {
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
  },
  chatInitMessage: {
    position: "fixed",
    bottom: "2rem",
    right: "6rem",
    borderRadius: "1rem 1rem 0 1rem",
    display: "inlineBlock",
    padding: "0.5rem",
    backgroundColor: Colors.primary,
    color: "white",
    fontSize: "16px",
    justifyContent: "flexEnd",
    textSize: "0.9rem",
  },
};

export default App;
