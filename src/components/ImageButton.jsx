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
  clickScale = 0.98,
  activeScale = 1.03,
  transitionDuration = '0.15s',
  transitionTiming = 'ease-out',
  width = '100%',
  height = '100%',
  top = '0%',
  left = '0%',
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  zIndex = 20,
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
    if (isActive) {
      if (buttonState === 'click') {
        return { transform: `scale(${clickScale})` };
      }
      if (buttonState === 'hover') {
        return { transform: `scale(${hoverScale})` };
      }
      return { transform: `scale(${activeScale})` };
    } else {
      if (buttonState === 'click') {
        return { transform: `scale(${clickScale})` };
      }
      if (buttonState === 'hover') {
        return { transform: `scale(${hoverScale})` };
      }
      return { transform: 'scale(1)' };
    }
  };

  // 获取过渡样式
  const getTransitionStyle = () => ({
    transition: `transform ${transitionDuration} ${transitionTiming}`,
  });

  const handleClick = (e) => {
    if (onClick) {
      onClick(id, e);
    }
  };

  const handleMouseEnter = (e) => {
    setButtonState('hover');
    if (onMouseEnter) onMouseEnter(e); // 调用外部传入的 handler
  };

  const handleMouseLeave = (e) => {
    setButtonState('normal');
    if (onMouseLeave) onMouseLeave(e); // 调用外部传入的 handler
  };

  const handleMouseDown = (e) => {
    setButtonState('click');
    if (onMouseDown) onMouseDown(e); // 调用外部传入的 handler
  };

  const handleMouseUp = (e) => {
    setButtonState('hover');
    if (onMouseUp) onMouseUp(e); // 调用外部传入的 handler
  };

  const buttonStyle = getButtonStyle();
  const transitionStyle = getTransitionStyle();

  return (
    <div
      className={`image-button-wrapper ${className}`}
      style={{
        width: "100%",
        height: "100%",
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 图片显示区域 - 占满整个空间，并且跟随按钮一起缩放 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: zIndex,
          ...buttonStyle, // 图片也应用相同的缩放效果
          ...transitionStyle // 添加过渡动画
        }}
      >
        <PixelArt
          src={getCurrentImage()}
          containerStyle={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* 可点击按钮区域 - 可以控制大小和位置 */}
      <button
        ref={buttonRef}
        className="image-button-clickable"
        style={{
          position: 'absolute',
          zIndex: 100,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          margin: 0,
          transformOrigin: 'center',
          // 控制按钮的实际大小和位置
          width: typeof width === 'number' ? `${width}%` : width,
          height: typeof height === 'number' ? `${height}%` : height,
          top: typeof top === 'number' ? `${top}%` : top,
          left: typeof left === 'number' ? `${left}%` : left,
          ...buttonStyle, // 按钮也应用缩放效果
          ...transitionStyle // 添加过渡动画
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        data-button-id={id}
      >
        {/* 透明按钮，没有内容 */}
      </button>
    </div>
  );
};

export default ImageButton;