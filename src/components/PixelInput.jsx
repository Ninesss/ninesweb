// PixelInput.js
import React, { useState, useRef } from 'react';
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
  inputPaddingLeft = "2%",
  inputPaddingRight = "2%",
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

  const handleMouseEnter = () => {
    if (inputState !== 'focus') {
      setInputState('hover');
    }
  };

  const handleMouseLeave = () => {
    if (inputState !== 'focus') {
      setInputState('normal');
    }
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 背景图片 - 覆盖整个容器 */}
      <PixelArt
        src={getCurrentImage()}
        containerStyle={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // 覆盖整个容器宽度
          height: '100%', // 覆盖整个容器高度
          zIndex: 10
        }}
        imageStyle={{
          width: '100%', // 图片填充整个容器
          height: '100%'
        }}
      />

      {/* 输入框包装器 - 只有这个区域有内边距 */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          width: "100%", // 占据整个容器宽度
          height: "100%", // 占据整个容器高度
          paddingLeft: inputPaddingLeft,
          paddingRight: inputPaddingRight,
          display: 'flex',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'text'
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* 输入框 */}
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
            color: 'white',
            fontFamily: 'inherit',
            cursor: 'inherit',
            fontSize: fontSize,
            textAlign: 'left'
          }}
        />
      </div>
    </div>
  );
};

export default PixelInput;