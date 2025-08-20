// src/chatbot/ChatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Rahul Singh";

const config = {
  botName,
  initialMessages: [
    createChatBotMessage(`👋 Hi, I'm ${botName}! You can ask me about my skills, services, projects, or contact details.`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2563eb", // Blue tone
    },
    chatButton: {
      backgroundColor: "#2563eb",
    },
  },
};

export default config;