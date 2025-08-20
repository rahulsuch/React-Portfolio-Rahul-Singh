import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! 👋 I'm here to help you with Rahul's portfolio. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simple rule-based response logic
    let botReply = "I'm not sure how to respond to that yet.";
    const msg = input.toLowerCase();

    if (msg.includes("available")) botReply = "Rahul is currently available for freelance and collaboration. 🎯";
    else if (msg.includes("skills")) botReply = "Rahul specializes in React, Redux, Three.js, Tailwind, and UI design.";
    else if (msg.includes("email")) botReply = "You can reach Rahul at singhrah8ul542@gmail.com 📧";
    else if (msg.includes("experience")) botReply = "Rahul has 3.2+ years of experience in frontend development including React.js, Redux, and scalable UI systems.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
    }, 600);

    setInput("");
  };

  return (
    <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="h-60 overflow-y-auto flex flex-col gap-2 text-sm mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md max-w-[80%] ${
              msg.type === "user"
                ? "self-end bg-blue-600 text-white"
                : "self-start bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 p-2 rounded-md outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;