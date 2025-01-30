import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane, FaCommentDots, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const OPENAI_API_KEY = "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"; // Replace with your actual API key

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    const newMessage = { text: userInput, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://platform.openai.com/docs/api-reference",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: userInput },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botReply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, something went wrong. Please try again.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 p-3 rounded-full shadow-lg text-white hover:bg-blue-600 transition"
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg w-80 h-[500px] flex flex-col border border-gray-300">
          {/* Header */}
          <div className="bg-blue-500 text-white flex items-center justify-between px-4 py-2 rounded-t-lg">
            <h4 className="font-bold">AI Assistant</h4>
            <button onClick={toggleChat} className="text-white">
              <FaTimes />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-gray-500 text-center">Typing...</div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-gray-300 p-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              disabled={isLoading}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
