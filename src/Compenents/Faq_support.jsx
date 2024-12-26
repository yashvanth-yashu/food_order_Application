import React, { useState } from "react";
import './Faq_support.css';

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const chatbotMsgList = [
    ["Hii RaviTeja"],
  ];

  const sendMsgToChatbot = () => {
    if (userInput.trim() === "") {
      alert("Please Say Something");
      return;
    }

    const newMessages = [...chatMessages, { type: "user", message: userInput }];
    setChatMessages(newMessages);
    setUserInput("");

    getReplyFromChatbot();
  };

  const getReplyFromChatbot = () => {
    const noOfChatbotMsgs = chatbotMsgList.length;
    const randomIndex = Math.floor(Math.random() * noOfChatbotMsgs);
    const chatbotMsg = chatbotMsgList[randomIndex];

    const newMessages = [
      ...chatMessages,
      { type: "chatbot", message: chatbotMsg },
    ];
    setChatMessages(newMessages);
  };

  return (
    <div className="p-2">
      <h1 className="text-center headingg chatbot-heading">FAQ & Support</h1>
      <img
        className="image"
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png"
        alt="Chatbot"
      />
      <div className="chat-container" id="chatContainer">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.type === "user"
                ? "msg-to-chatbot-container"
                : "msg-from-chatbot-container"
            }
          >
            <span
              className={msg.type === "user" ? "msg-to-chatbot" : "msg-from-chatbot"}
            >
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="d-flex flex-row justify-content-end">
        <img
          className="image"
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png"
          alt="Chatbot Boy"
        />
      </div>
      <div className="d-flex flex-row justify-content-center fixed-bottom">
        <input
          placeholder="What Can I help you"
          className="user-input"
          id="userInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="send-msg-btn" id="sendMsgBtn" onClick={sendMsgToChatbot}>
          ⬆️
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
