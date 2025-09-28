import './ChatScreen.css';
import { useState, useEffect } from "react";
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { useLanguage } from '../../LanguageContext';

export function ChatScreen() {
  const [chatMessages, setChatMessages] = useState([]);
  const { userLanguage } = useLanguage();

  useEffect(() => {
    const initialMessages = {
      "zh": [
        { "message": "你好，我是Nines，欢迎来乐园！", "sender": "nines", "id": "1" }
      ],
      "en": [
        { "message": "Hello. I'm Nines, welcome to the paradise!", "sender": "nines", "id": "1" }
      ],
      "ja": [
        { "message": "こんにちは、Ninesです、楽園へようこそ！", "sender": "nines", "id": "1" }
      ]
      // 可以继续添加其他语言...
    };

    // 设置对应语言的初始消息，如果没有对应语言则使用英语
    const messages = initialMessages[userLanguage] || initialMessages.en;
    setChatMessages(messages);
  }, [userLanguage]); // 当语言改变时重新设置初始消息

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