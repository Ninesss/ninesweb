import React, { useState, useEffect, useRef } from 'react';
import './PixelArt.css';

const PixelArt = ({
  src,
  className = '',
  containerStyle = {},
  imageStyle: externalImageStyle = {}
}) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });

      const updateScale = () => {
        if (containerRef.current) {
          const { width } = containerRef.current.getBoundingClientRect();
          const newScale = Math.floor(width / img.width);
          setScale(Math.max(1, newScale));
        }
      };

      updateScale();

      const resizeObserver = new ResizeObserver(updateScale);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => resizeObserver.disconnect();
    };
    img.src = src;
  }, [src]);

  // 关键修改：容器样式添加 pointer-events: none
  const mergedContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    pointerEvents: 'none', // 阻止容器拦截鼠标事件
    ...containerStyle
  };

  // 图片样式也添加 pointer-events: none
  const mergedImageStyle = {
    width: `${imageSize.width * scale}px`,
    height: `${imageSize.height * scale}px`,
    imageRendering: 'pixelated',
    pointerEvents: 'none', // 阻止图片拦截鼠标事件
    ...externalImageStyle
  };

  return (
    <div
      ref={containerRef}
      className={`pixel-art-container ${className}`}
      style={mergedContainerStyle}
    >
      <img
        src={src}
        alt="pixel art"
        style={mergedImageStyle}
        draggable={false}
      />
    </div>
  );
};

export default PixelArt;