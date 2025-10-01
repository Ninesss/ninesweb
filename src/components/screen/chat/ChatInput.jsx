import { useState } from "react";
import ImageButton from '../../ImageButton';
import PixelInput from "../../PixelInput";
import PixelArt from "../../PixelArt";
import sendButtonImage from "../../../assets/chat_send_button.png"
import sendButtonClickImage from "../../../assets/chat_send_button_click.png"
import chatInputbox from "../../../assets/chat_input_box.png"
import chatInputBackgroundImage from "../../../assets/chat_input_background.png"
import { useLanguage } from '../../../components/LanguageContext';
import "./ChatInput.css";

// 导入语言文件
import zhMessages from '../../../data/chat/chat_zh.json';
import enMessages from '../../../data/chat/chat_en.json';
import jaMessages from '../../../data/chat/chat_ja.json';

// 语言映射
const messages = {
  zh: zhMessages,
  en: enMessages,
  ja: jaMessages
};

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const { userLanguage } = useLanguage();

  // 获取当前语言的消息
  const getCurrentMessages = () => {
    return messages[userLanguage] || messages.en;
  };

  // 获取回答
  function getResponse(inputText) {
    const text = inputText.toLowerCase().trim();
    const currentMessages = getCurrentMessages();
    const chatConfig = currentMessages.chat;

    // 根据输入内容匹配相应的回答类别
    if (text === "" || text.length < 2) {
      return chatConfig.shortInput;
    }

    // 遍历所有响应规则，检查是否有匹配的关键词
    for (const rule of chatConfig.responseRules) {
      for (const keyword of rule.keywords) {
        // 简单的包含匹配，适用于所有语言
        if (text.includes(keyword.toLowerCase())) {
          return getRandomResponse(rule.responses);
        }
      }
    }

    // 默认回答
    return getRandomResponse(chatConfig.defaultResponses);
  }

  // 从数组中随机选择一个回答
  function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // 获取占位符文本
  const getPlaceholderText = () => {
    return getCurrentMessages().chat.placeholder;
  };

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleSubmit() {
    sendMessage();
  }

  async function sendMessage() {
    if (!inputText.trim()) return;

    const userMessage = {
      message: inputText.trim(),
      sender: "user",
      id: crypto.randomUUID(),
      timestamp: new Date().toLocaleTimeString()
    };

    // 先添加用户消息
    const newChatMessages = [...chatMessages, userMessage];
    setChatMessages(newChatMessages);
    setInputText("");

    // 模拟思考时间
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // 获取并添加机器人回复
    const response = getResponse(inputText);
    const botMessage = {
      message: response,
      sender: "nines",
      id: crypto.randomUUID(),
      timestamp: new Date().toLocaleTimeString()
    };

    setChatMessages([...newChatMessages, botMessage]);
  }

  return (
    <div className="chat-input-container">
      <div className="chat-input-box">
        <div className="input-wrapper-box">
          <div className="input-wrapper">
            <PixelInput
              normalImage={chatInputbox}
              hoverImage={chatInputbox}
              focusImage={chatInputbox}
              placeholder={getPlaceholderText()}
              value={inputText}
              onChange={saveInputText}
              onSubmit={handleSubmit}
              fontSize="1.5vw"
              fontColor="#474747"
              width={96}
              height={50}
              top={25}
              left={2}
            />
          </div>
        </div>
        <div className="send-button-box">
          <div className="send-button">
            <ImageButton
              normalImage={sendButtonImage}
              hoverImage={sendButtonImage}
              clickImage={sendButtonClickImage}
              hoverScale={1}
              clickScale={1}
              activeScale={1}
              onClick={sendMessage}
              width={94}
              height={46}
              top={28}
              left={4}
            />
          </div>
        </div>
        <PixelArt className="chat-input-background" src={chatInputBackgroundImage} />
      </div>
    </div>
  );
}