import React, { useState, useEffect, useRef } from 'react';

const PixelArt = ({
  src,
  className = '',
  containerStyle = {},
  imageStyle: externalImageStyle = {},
  scale: externalScale,
  onScaleChange
}) => {
  const containerRef = useRef(null);
  const [internalScale, setInternalScale] = useState(1);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const currentScale = externalScale !== undefined ? externalScale : internalScale;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });

      const updateScale = () => {
        if (containerRef.current && externalScale === undefined) {
          const { width } = containerRef.current.getBoundingClientRect();
          const newScale = width / img.width;
          const finalScale = Math.max(0.1, newScale);
          setInternalScale(finalScale);
          // 调用回调函数
          if (onScaleChange) {
            onScaleChange(finalScale);
          }
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
  }, [src, externalScale, onScaleChange]);

  const mergedContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    pointerEvents: 'none',
    overflow: 'hidden',
    userSelect: 'none', // 添加这个属性
    WebkitUserSelect: 'none', // 针对Webkit浏览器
    MozUserSelect: 'none', // 针对Firefox
    msUserSelect: 'none', // 针对IE/Edge
    ...containerStyle
  };

  const mergedImageStyle = {
    width: `${imageSize.width * currentScale}px`,
    height: `${imageSize.height * currentScale}px`,
    imageRendering: 'pixelated',
    pointerEvents: 'none',
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%',
    userSelect: 'none', // 添加这个属性
    WebkitUserSelect: 'none', // 针对Webkit浏览器
    MozUserSelect: 'none', // 针对Firefox
    msUserSelect: 'none', // 针对IE/Edge
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