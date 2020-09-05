import React, { useState } from "react";

function ChatBox(props) {
  const [text, setText] = useState("");
  function handleChange(event) {
    const { value } = event.target;

    setText(value);
  }
  return (
    <div>
      <div style={styles.chatBar}>
        <input
          value={text}
          style={styles.chatBar.textInput}
          onChange={handleChange}
          placeholder="Say hi"
          disabled={false}
        ></input>
        <a href="#akshay">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.sendMessage(text);
              setText("");
            }}
            style={styles.chatBar.send}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chat-right-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
              />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </a>
      </div>
      <div style={styles.chatBar}></div>
    </div>
  );
}

const styles = {
  chatBar: {
    height: "3.4rem",
    backgroundColor: "#f4f4f4",
    flex: 2,
    display: "flex",
    textInput: {
      outline: "none",
      border: 0,
      backgroundColor: "#f4f4f4",
      padding: "1rem",
      alignContent: "flexStart",
      width: "20rem",
    },
    send: {
      margin: "0.5rem 0.5rem 0 0.5rem",
      alignContent: "flexEnd",
    },
  },
};

export default ChatBox;
