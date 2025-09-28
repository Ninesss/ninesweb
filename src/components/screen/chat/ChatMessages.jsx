import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

export function ChatMessages({ chatMessages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToBottom);
    });
  }, [chatMessages]);

  return (
    <div className="chat-messages-container">
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
      <div ref={messagesEndRef} style={{ height: '1px' }} />
    </div>
  );
}