import { useState, useRef } from 'react';
import PixelArt from './PixelArt';

const PixelInput = ({
  normalImage,
  hoverImage,
  focusImage,
  placeholder = "",
  value = "",
  onChange,
  onFocus,
  onBlur,
  onSubmit,
  className = "",
  maxLength,
  disabled = false,
  fontSize = "2vw",
  fontColor = "black",
  // 新增尺寸控制属性
  width = '100%',
  height = '100%',
  top = '0%',
  left = '0%',
}) => {
  const [inputState, setInputState] = useState('normal');
  const inputRef = useRef(null);

  const getCurrentImage = () => {
    if (inputState === 'focus') return focusImage || hoverImage || normalImage;
    if (inputState === 'hover') return hoverImage || normalImage;
    return normalImage;
  };

  const handleFocus = (e) => {
    setInputState('focus');
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setInputState('normal');
    if (onBlur) onBlur(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSubmit) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div
      className={`pixel-input-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* 背景图片 - 覆盖整个容器 */}
      <PixelArt
        src={getCurrentImage()}
        containerStyle={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10
        }}
        imageStyle={{
          width: '100%',
          height: '100%'
        }}
      />

      {/* 输入框包装器 - 限制大小和位置，重置所有默认样式 */}
      <div
        style={{
          position: 'absolute',
          zIndex: 20,
          // 控制输入框的实际大小和位置
          width: typeof width === 'number' ? `${width}%` : width,
          height: typeof height === 'number' ? `${height}%` : height,
          top: typeof top === 'number' ? `${top}%` : top,
          left: typeof left === 'number' ? `${left}%` : left,
          // 重置所有可能的默认样式
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'text',
          // 确保没有边框和背景
          border: 'none',
          background: 'none',
          outline: 'none'
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* 输入框 - 也重置所有默认样式 */}
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          disabled={disabled}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: fontColor,
            fontFamily: 'inherit',
            cursor: 'inherit',
            fontSize: fontSize,
            textAlign: 'left',
            // 重置所有可能的默认样式
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            // 确保没有额外的间距
            lineHeight: '1',
            verticalAlign: 'middle'
          }}
        />
      </div>
    </div>
  );
};

export default PixelInput;