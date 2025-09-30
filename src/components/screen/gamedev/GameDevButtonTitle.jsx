import './GameDevButtonTitle.css';
import { useLanguage } from '../../../components/LanguageContext';

export function GameDevButtonTitle({
  gamename,
  title,
  createTime
}) {
  const { userLanguage } = useLanguage();

  const languageStyles = {
    "zh": {
      gameNameSize: "1vw",
      gameNameSpacing: "0.1vw",
      titleSize: "1vw",
      titleSpacing: "0",
      timeSize: "0.9vw",
      timeSpacing: "0.05vw",
      lineHeight: "1"
    },
    "en": {
      gameNameSize: "1vw",
      gameNameSpacing: "0",
      titleSize: "1.1vw",
      titleSpacing: "0",
      timeSize: "0.9vw",
      timeSpacing: "0.05vw",
      lineHeight: "0.9"
    },
    "ja": {
      gameNameSize: "1vw",
      gameNameSpacing: "-0.1vw",
      titleSize: "1vw",
      titleSpacing: "-0.1vw",
      timeSize: "0.9vw",
      timeSpacing: "0.05vw",
      lineHeight: "1"
    }
  };

  const currentStyle = languageStyles[userLanguage] || languageStyles.en;

  return (
    <div className="gamedev_button_title">
      <div
        className="game-name"
        style={{
          fontSize: currentStyle.gameNameSize,
          letterSpacing: currentStyle.gameNameSpacing,
          lineHeight: currentStyle.lineHeight
        }}
      >
        {gamename}
      </div>
      <div
        className="game-title"
        style={{
          fontSize: currentStyle.titleSize,
          letterSpacing: currentStyle.titleSpacing,
          lineHeight: currentStyle.lineHeight
        }}
      >
        {title}
      </div>
      <div
        className="create-time"
        style={{
          fontSize: currentStyle.timeSize,
          letterSpacing: currentStyle.timeSpacing
        }}
      >
        {createTime}
      </div>
    </div>
  );
}