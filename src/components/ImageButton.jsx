import { useState, useRef } from 'react';
import PixelArt from './PixelArt';

const ImageButton = ({
  id,
  activeImage,
  normalImage,
  hoverImage,
  clickImage,
  onClick,
  className = '',
  isActive = false,
  hoverScale = 1.05,
  clickScale = 0.95,
  activeScale = 1.03,
}) => {
  const [buttonState, setButtonState] = useState('normal');
  const buttonRef = useRef(null);

  const getCurrentImage = () => {
    if (isActive && activeImage) return activeImage;
    if (buttonState === 'click') return clickImage || hoverImage || normalImage;
    if (buttonState === 'hover') return hoverImage || normalImage;
    return normalImage;
  };

  const getButtonStyle = () => {
    // 简化逻辑，移除所有过渡
    if (isActive) {
      // 激活状态
      if (buttonState === 'click') {
        return { transform: `scale(${clickScale})` };
      }
      if (buttonState === 'hover') {
        return { transform: `scale(${hoverScale})` };
      }
      return { transform: `scale(${activeScale})` };
    } else {
      // 非激活状态
      if (buttonState === 'click') {
        return { transform: `scale(${clickScale})` };
      }
      if (buttonState === 'hover') {
        return { transform: `scale(${hoverScale})` };
      }
      return { transform: 'scale(1)' };
    }
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(id, e);
    }
  };

  const handleMouseEnter = () => {
    setButtonState('hover');
  };

  const handleMouseLeave = () => {
    setButtonState('normal');
  };

  const handleMouseDown = () => {
    setButtonState('click');
  };

  const handleMouseUp = () => {
    setButtonState('hover');
  };

  return (
    <button
      ref={buttonRef}
      className={`image-button ${className}`}
      style={{
        width: "100%",
        height: "100%",
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transformOrigin: 'center',
        ...getButtonStyle() // 直接应用变换，无过渡
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      data-button-id={id}
    >
      <PixelArt
        src={getCurrentImage()}
      />
    </button>
  );
};

export default ImageButton;