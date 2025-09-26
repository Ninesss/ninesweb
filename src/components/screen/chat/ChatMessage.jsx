import NinesAvatarImage from "../../../assets/chat_avatar_nines.png";
import UserAvatarImage from "../../../assets/chat_avatar_user.png";
import PixelArt from "../../PixelArt"
import "./ChatMessage.css";

export function ChatMessage(props) {
  const { message, sender } = props;

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-nines"}
    >
      {sender === "nines" && (
        <div className="chat-message-profile">
          <PixelArt src={NinesAvatarImage} />
        </div>
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <div className="chat-message-profile">
          <PixelArt className="chat-message-profile" src={UserAvatarImage} />
        </div>
      )}
    </div>
  );
}