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

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const { userLanguage } = useLanguage(); // 使用语言上下文

  // 多语言预设回答库
  const presetResponses = {
    zh: {
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
      ],
      shortInput: "请告诉我更多信息，这样我才能更好地帮助你！"
    },
    en: {
      greetings: [
        "Hello! I'm Nines, nice to serve you!",
        "Hi! How can I help you today?",
        "Hey there! How's your day going?"
      ],
      questions: [
        "That's a great question, let me think about how to answer...",
        "Regarding this question, I can provide some basic information.",
        "I understand your concern, let me try to explain."
      ],
      help: [
        "I can help answer questions, provide information, or just chat!",
        "Try asking me some common questions, or tell me what you need help with.",
        "I'm here to help you anytime!"
      ],
      thanks: [
        "You're welcome! Glad I could help!",
        "It's my pleasure! Is there anything else you need help with?",
        "Thank you for your recognition! Feel free to come back anytime."
      ],
      farewell: [
        "Goodbye! Looking forward to chatting with you again!",
        "Have a wonderful day!",
        "See you later, remember to come back if you have any questions!"
      ],
      default: [
        "Interesting perspective! Can you tell me more?",
        "I see, please continue.",
        "That sounds fascinating!",
        "Okay, I've noted that.",
        "Thanks for sharing this information!"
      ],
      shortInput: "Please tell me more so I can help you better!"
    }
  };

  // 获取当前语言的回答
  function getResponse(inputText) {
    const text = inputText.toLowerCase().trim();
    const responses = presetResponses[userLanguage] || presetResponses.en;

    // 根据输入内容匹配相应的回答类别
    if (text === "" || text.length < 2) {
      return responses.shortInput;
    }

    if (userLanguage === "zh") {
      // 中文关键词匹配
      if (/(你好|嗨|hello|hi|早上好|下午好|晚上好)/.test(text)) {
        return getRandomResponse(responses.greetings);
      }
      if (/(谢谢|感谢|thank|thanks)/.test(text)) {
        return getRandomResponse(responses.thanks);
      }
      if (/(再见|拜拜|bye|goodbye|再会)/.test(text)) {
        return getRandomResponse(responses.farewell);
      }
      if (/(帮助|help|怎么|如何|怎么办|为什么|what|how|why)/.test(text)) {
        return getRandomResponse(responses.help) + " " + getRandomResponse(responses.questions);
      }
      if (/(？|\?|吗|呢|什么|谁|哪里|when|where|who)/.test(text)) {
        return getRandomResponse(responses.questions);
      }
    } else {
      // 英文关键词匹配
      if (/(hello|hi|hey|good morning|good afternoon|good evening)/.test(text)) {
        return getRandomResponse(responses.greetings);
      }
      if (/(thank|thanks|appreciate)/.test(text)) {
        return getRandomResponse(responses.thanks);
      }
      if (/(bye|goodbye|see you|farewell)/.test(text)) {
        return getRandomResponse(responses.farewell);
      }
      if (/(help|how to|what is|why|how|can you)/.test(text)) {
        return getRandomResponse(responses.help) + " " + getRandomResponse(responses.questions);
      }
      if (/(\?|what|when|where|who|which)/.test(text)) {
        return getRandomResponse(responses.questions);
      }
    }

    // 默认回答
    return getRandomResponse(responses.default);
  }

  // 从数组中随机选择一个回答
  function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // 根据语言获取占位符文本
  const getPlaceholderText = () => {
    switch (userLanguage) {
      case "zh": return "说点什么...";
      case "en": return "Say something...";
      case "ja": return "何か話してください...";
      default: return "Say something...";
    }
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
              top={25}  // (100 - 50) / 2 = 25
              left={2} // (100 - 96) / 2 = 2
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
              top={28}  // (100 - 46) / 2 = 28
              left={4} // (100 - 100) / 2 = 0
            />
          </div>
        </div>
        <PixelArt className="chat-input-background" src={chatInputBackgroundImage} />
      </div>
    </div>
  );
}