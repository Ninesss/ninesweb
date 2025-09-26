import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";


export function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);

  useEffect(() => {
    chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}