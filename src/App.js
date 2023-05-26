import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import FloatingButton from "./FloatingButton";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const chatbotData = localStorage.getItem("chatbotData");
    if (chatbotData) {
      setIsOpen(JSON.parse(chatbotData).isOpen);
    } else {
      
      localStorage.setItem("chatbotInitialMessages", JSON.stringify(config.initialMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatbotData", JSON.stringify({ isOpen }));
  }, [isOpen]);

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <FloatingButton isOpen={isOpen} handleClick={handleToggleChatbot} />
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </div>
  );
}

export default App;
