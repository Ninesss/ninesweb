import { useState } from "react";
import ImageButton from '../../ImageButton';
import PixelInput from "../../PixelInput";
import sendButtonImage from "../../../assets/chat_button_send.png"
import chatInputbox from "../../../assets/chat_inputbox.png"
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  // 预设回答库
  const presetResponses = {
    greetings: [
      "你好！我是Nines，很高兴为你服务！",
      "嗨！有什么我可以帮助你的吗？",
      "你好呀！今天过得怎么样？"
    ],
    questions: [
      "这是一个很好的问题，让我想想怎么回答你...",
      "关于这个问题，我可以为你提供一些基本信息。",
      "我理解你的疑问，让我尝试解释一下。"
    ],
    help: [
      "我可以帮你解答问题、提供信息或者只是聊聊天！",
      "试试问我一些常见问题，或者告诉我你需要什么帮助。",
      "我在这里随时为你提供帮助！"
    ],
    thanks: [
      "不客气！很高兴能帮到你！",
      "这是我应该做的！还有什么需要帮助的吗？",
      "谢谢你的认可！随时欢迎再来咨询。"
    ],
    farewell: [
      "再见！期待下次与你聊天！",
      "祝你有个美好的一天！",
      "再见啦，记得有问题随时来找我哦！"
    ],
    default: [
      "很有趣的观点！能告诉我更多吗？",
      "我明白了，请继续。",
      "这听起来很有意思！",
      "好的，我记下了。",
      "谢谢分享这个信息！"
    ]
  };

  function getResponse(inputText) {
    const text = inputText.toLowerCase().trim();

    // 根据输入内容匹配相应的回答类别
    if (text === "" || text.length < 2) {
      return "请告诉我更多信息，这样我才能更好地帮助你！";
    }

    if (/(你好|嗨|hello|hi|早上好|下午好|晚上好)/.test(text)) {
      return getRandomResponse(presetResponses.greetings);
    }

    if (/(谢谢|感谢|thank|thanks)/.test(text)) {
      return getRandomResponse(presetResponses.thanks);
    }

    if (/(再见|拜拜|bye|goodbye|再会)/.test(text)) {
      return getRandomResponse(presetResponses.farewell);
    }

    if (/(帮助|help|怎么|如何|怎么办|为什么|what|how|why)/.test(text)) {
      return getRandomResponse(presetResponses.help) + " " + getRandomResponse(presetResponses.questions);
    }

    if (/(？|\?|吗|呢|什么|谁|哪里|when|where|who)/.test(text)) {
      return getRandomResponse(presetResponses.questions);
    }

    // 默认回答
    return getRandomResponse(presetResponses.default);
  }

  // 从数组中随机选择一个回答
  function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

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
        <div className="input-wrapper">
          <PixelInput
            normalImage={chatInputbox}
            hoverImage={chatInputbox}
            focusImage={chatInputbox}
            placeholder="Say something..."
            value={inputText}
            onChange={saveInputText}
            onSubmit={handleSubmit}
          />
        </div>
        <div className="send-button" >
          <ImageButton
            normalImage={sendButtonImage}
            hoverImage={sendButtonImage}
            clickImage={sendButtonImage}
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}