import './ChatScreen.css';
import { useState } from "react";
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

export function ChatScreen() {
  const [chatMessages, setChatMessages] = useState([
  ]);

  return (
    <div className="chat-screen-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}