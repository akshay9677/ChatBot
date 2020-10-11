import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatButton from "../ChatButton";
import ChatScreen from "../ChatScreen";
import "./Bot.css";
import Colors from "../../../constants/constants";

var options = null;

function Bot(props) {
  let params = {
    conversation: [],
    email: "N/A",
    sysCreatedTime: new Date().toLocaleString(),
    priority: "High",
    status: "Closed",
    assignee: "Michael Scott",
    bot: true,
    tag: "Pricing",
  };
  const [tempParam, setTempParam] = useState(null);
  const [chatScreen, setChatScreen] = useState(false);
  const [data, setData] = useState([]);
  // const [initMessage, setInitMessage] = useState(true);
  const [typing, setTyping] = useState(false);
  let comp = null;
  let actionpresent = true;
  // const [firstMessage, setfirstMessage] = useState("");

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
        chatData.bot.map((botText) => {
          setData([{ message: botText, bot: true }]);
          params.conversation.push({ message: botText, bot: true });
          return botText;
        });
        options = chatData.options;
        let resp = await axios.post(
          "http://localhost:5000/api/v1/conversations",
          params
        );
        setTempParam(resp.data.data);
        // setfirstMessage(chatData.bot[0]);
      } else {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  function handleClick() {
    setChatScreen(!chatScreen);

    props.handleBotClick();
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
  async function handleOptions(value) {
    let newSenderData = {
      message: value.user,
      bot: false,
    };
    options = [];
    setData((prevData) => {
      return [...prevData, newSenderData];
    });
    let response = await axios.post(
      "http://localhost:5000/api/v1/chatbot/getChat",
      {
        id: value.id,
      }
    );
    let chatData = response.data.data;
    actionpresent = chatData.userAction;

    let newData = {
      message: chatData.bot,
      bot: true,
    };
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      options = chatData.options;
      setData((prevData) => {
        return [...prevData, newData];
      });
    }, 3000);
    params.conversation = [...data, newSenderData];
    chatData.bot.forEach((item) => {
      params.conversation.push({ message: item, bot: true });
    });
    tempParam.conversation = params.conversation;
    setTempParam(tempParam);
    // eslint-disable-next-line
    let respo = await axios.put(
      "http://localhost:5000/api/v1/conversations",
      tempParam
    );
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
            isActionPresent={actionpresent}
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
            <ChatButton clickSense={chatScreen} onPress={handleClick} />
          )}
        </div>
      </div>
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
    bottom: "8rem",
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

export default Bot;
