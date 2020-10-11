import React, { useState, useEffect } from "react";
import axios from "axios";
import LiveChatButton from "../LiveChatButton";
import ChatScreen from "../ChatScreen";
import "./Live.css";
import Colors from "../../../constants/constants";

const URL = "ws://localhost:5000";
function Live(props) {
  let params = {
    conversation: [],
    email: null,
    sysCreatedTime: new Date().toLocaleString(),
    priority: "High",
    status: "Open",
    assignee: "Michael Scott",
    bot: false,
    tag: "Pricing",
  };
  const ws = new WebSocket(URL);
  const [chatScreen, setChatScreen] = useState(false);
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState(false);
  const [conversationData, setConversationData] = useState(null);
  const [email, setEmail] = useState("");
  let comp = null;

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.post(
        "http://localhost:5000/api/v1/chatbot/getChat",
        {
          id: 120,
        }
      );
      let { error } = data;
      if (!error) {
        let chatData = data.data;
        chatData.bot.map((botText) =>
          setData([{ message: botText, bot: true }])
        );
        setTyping(false);
      } else {
        console.log(error);
      }

      ws.onopen = () => {
        console.log("connected");
      };
      ws.onmessage = (evt) => {
        const message = JSON.parse(evt.data);
        if (message.userId === email) {
          setData((prevData) => {
            return [...prevData, message];
          });
          console.log("live");
        }
      };
    }
    fetchData();
    // eslint-disable-next-line
  }, [email]);
  async function handleClick() {
    if (conversationData) {
      conversationData.status = "Closed";
      setConversationData(conversationData);
      // eslint-disable-next-line
      let { data } = await axios.put(
        "http://localhost:5000/api/v1/conversations",
        conversationData
      );
    }
    setChatScreen(!chatScreen);
    props.handleBotClick();
  }
  async function handleSendMessage(textM) {
    let newData = {
      message: textM,
      bot: false,
      userId: email,
    };
    conversationData.status = "Open";
    conversationData.conversation = [...data, newData];
    setConversationData(conversationData);
    let response = await axios.put(
      "http://localhost:5000/api/v1/conversations",
      conversationData
    );
    console.log(response);
    setEmail(email);
    ws.send(JSON.stringify(newData));
  }
  async function handleAddDetail(text) {
    setEmail(text);
    console.log(text);
    params.email = text;
    params.conversation = data;
    let resp = await axios.post(
      "http://localhost:5000/api/v1/conversations",
      params
    );
    let convo = resp.data.data;

    ws.send(JSON.stringify({ message: "##CONECTED##" }));
    setConversationData(convo);
  }
  if (chatScreen) {
    comp = (
      <div>
        <div style={{ textAlign: "center" }}>
          <ChatScreen
            handleAddDetail={handleAddDetail}
            onSend={handleSendMessage}
            messages={data}
            closeClick={handleClick}
            typing={typing}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div style={chatScreen ? styles.chatContainer : styles.chatBtn}>
          {chatScreen ? (
            comp
          ) : (
            <LiveChatButton clickSense={chatScreen} onPress={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  chatContainer: {},
  chatBtn: {
    position: "fixed",
    bottom: "12rem",
    right: "5rem",
  },
  chatInitMessage: {
    position: "fixed",
    bottom: "1.5rem",
    right: "5.5rem",
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

export default Live;
