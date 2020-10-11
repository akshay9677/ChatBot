import React, { useState, useEffect } from "react";
import Bot from "./Components/Bot/widget/Bot";
import Live from "./Components/Live/widget/Live";
import MainIcon from "./Components/Mainicon/MainIcon";

const URL = "ws://localhost:5000";
function App(props) {
  const ws = new WebSocket(URL);
  const [showType, setShowType] = useState(false);
  const [showLiveBtn, setshowLiveBtn] = useState(true);
  const [showMainIcon, setShowMainIcon] = useState(true);
  const [showBotIcon, setShowBotIcon] = useState(true);
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div>
        <div style={{ position: "fixed", bottom: "4rem", right: "5rem" }}>
          {showMainIcon && <MainIcon onPress={() => setShowType(!showType)} />}
        </div>
        {showType && (
          <div>
            {showBotIcon && (
              <Bot
                handleBotClick={() => {
                  setshowLiveBtn(!showLiveBtn);
                  setShowMainIcon(!showMainIcon);
                  ws.send(JSON.stringify({ message: "##CONECTED##" }));
                }}
              />
            )}
            {showLiveBtn && (
              <div
                style={{
                  position: "fixed",
                  bottom: "2rem",
                  right: "1.7rem",
                }}
              >
                <Live
                  handleBotClick={() => {
                    setShowBotIcon(!showBotIcon);
                    setShowMainIcon(!showMainIcon);
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
