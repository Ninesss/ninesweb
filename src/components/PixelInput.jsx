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
  disabled = false
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
        cursor: disabled ? 'not-allowed' : 'text'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => inputRef.current?.focus()}
    >
      {/* 背景图片 */}
      <PixelArt
        src={getCurrentImage()}
        containerStyle={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        imageStyle={{
          objectFit: 'fill'
        }}
      />

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
          padding: '0 20px',
          fontSize: '16px',
          color: 'white',
          fontFamily: 'inherit',
          position: 'relative',
          zIndex: 1,
          cursor: 'inherit'
        }}
      />
    </div>
  );
};

export default PixelInput;