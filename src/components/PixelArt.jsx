import React, { useState, useEffect, useRef } from 'react';
import './PixelArt.css';

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