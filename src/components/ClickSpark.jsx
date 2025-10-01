import { useRef, useEffect, useCallback, useState } from 'react';

const ClickSpark = ({
  sparkColor = '#474747',
  sparkSize = 10,
  sparkRadius = 20,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.2,
  offsetX = 0,
  offsetY = 0,
  customCursor = null,
  cursorHotspot = [0, 0],
  pointerCursor = null,
  textCursor = null,
  excludeSelectors = ['button', 'a', 'input', 'select', 'textarea', '[role="button"]'],

  // 雪碧图拖尾效果配置
  spritesheetUrl = '/spark-spritesheet.png',
  spriteConfig = {
    frameWidth: 31,
    frameHeight: 31,
    totalFrames: 15,
    frameRate: 60
  },
  trailEnabled = true,
  trailInterval = 80,
  trailOpacity = 0.8,
  maxTrails = 15,
  trailScale = 1.2,
  trailRotation = true,
  pixelPerfectScaling = true,
  pixelScaleMultiplier = 1,

  children
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sparksRef = useRef([]);
  const trailsRef = useRef([]);
  const startTimeRef = useRef(null);
  const lastTrailTimeRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });

  const mouseActiveRef = useRef(false);
  const mouseTimeoutRef = useRef(null);

  const spritesheetCacheRef = useRef(null);
  const [spritesheetLoaded, setSpritesheetLoaded] = useState(false);

  // 获取正确的画布坐标
  const getCanvasCoordinates = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    // 计算相对于画布的位置
    const rawX = clientX - rect.left;
    const rawY = clientY - rect.top;

    // 计算缩放比例（考虑像素完美缩放）
    let scaleX = 1, scaleY = 1;
    if (pixelPerfectScaling) {
      const dpr = window.devicePixelRatio || 1;
      scaleX = (canvas.width / dpr) / rect.width;
      scaleY = (canvas.height / dpr) / rect.height;
    } else {
      scaleX = canvas.width / rect.width;
      scaleY = canvas.height / rect.height;
    }

    // 应用偏移和缩放
    const x = (rawX + offsetX) * scaleX;
    const y = (rawY + offsetY) * scaleY;

    return { x, y };
  }, [offsetX, offsetY, pixelPerfectScaling]);

  // 预加载图片
  useEffect(() => {
    const loadImage = (url, type) => {
      return new Promise((resolve) => {
        if (!url) {
          resolve(false);
          return;
        }

        const img = new Image();
        img.onload = () => {
          if (type === 'spritesheet') {
            spritesheetCacheRef.current = img;
            setSpritesheetLoaded(true);
          }
          resolve(true);
        };
        img.onerror = () => {
          console.error(`图片加载失败: ${url}`);
          resolve(false);
        };
        img.src = url;
      });
    };

    const loadAllImages = async () => {
      if (trailEnabled && spritesheetUrl) {
        await loadImage(spritesheetUrl, 'spritesheet');
      }
    };

    loadAllImages();
  }, [spritesheetUrl, trailEnabled]);

  // 设置光标样式
  useEffect(() => {
    if (!customCursor && !pointerCursor && !textCursor) return;

    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    let cssRules = [];

    const hotspotX = cursorHotspot[0];
    const hotspotY = cursorHotspot[1];

    if (customCursor) {
      cssRules.push(`
        .clickspark-container, 
        .clickspark-container * {
          cursor: url('${customCursor}') ${hotspotX} ${hotspotY}, auto !important;
        }
      `);
    }

    if (pointerCursor) {
      cssRules.push(`
        .clickspark-container button,
        .clickspark-container a,
        .clickspark-container [role="button"],
        .clickspark-container [data-cursor="pointer"] {
          cursor: url('${pointerCursor}') ${hotspotX} ${hotspotY}, pointer !important;
        }
      `);
    } else if (customCursor) {
      cssRules.push(`
        .clickspark-container button,
        .clickspark-container a,
        .clickspark-container [role="button"],
        .clickspark-container [data-cursor="pointer"] {
          cursor: url('${customCursor}') ${hotspotX} ${hotspotY}, pointer !important;
        }
      `);
    }

    if (textCursor) {
      cssRules.push(`
        .clickspark-container input,
        .clickspark-container textarea,
        .clickspark-container [contenteditable="true"],
        .clickspark-container [data-cursor="text"] {
          cursor: url('${textCursor}') ${hotspotX} ${hotspotY}, text !important;
        }
      `);
    } else if (customCursor) {
      cssRules.push(`
        .clickspark-container input,
        .clickspark-container textarea,
        .clickspark-container [contenteditable="true"],
        .clickspark-container [data-cursor="text"] {
          cursor: url('${customCursor}') ${hotspotX} ${hotspotY}, text !important;
        }
      `);
    }

    styleElement.textContent = cssRules.join('\n');

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [customCursor, pointerCursor, textCursor, cursorHotspot]);

  // 画布尺寸调整
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;

        if (pixelPerfectScaling) {
          const dpr = window.devicePixelRatio || 1;
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;
          const ctx = canvas.getContext('2d');
          ctx.scale(dpr, dpr);
        }
      }
    };

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(parent);
    resizeCanvas();

    return () => ro.disconnect();
  }, [pixelPerfectScaling]);

  const easeFunc = useCallback(
    t => {
      switch (easing) {
        case 'linear': return t;
        case 'ease-in': return t * t;
        case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default: return t * (2 - t);
      }
    },
    [easing]
  );

  // 鼠标移动处理 - 修复坐标转换
  const handleMouseMove = useCallback((e) => {
    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    mousePosRef.current = coords;

    mouseActiveRef.current = true;

    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current);
    }

    mouseTimeoutRef.current = setTimeout(() => {
      mouseActiveRef.current = false;
    }, 50);
  }, [getCanvasCoordinates]);

  // 生成拖尾
  const generateTrail = useCallback((timestamp) => {
    if (!trailEnabled || !spritesheetLoaded || !mouseActiveRef.current) return;

    if (timestamp - lastTrailTimeRef.current < trailInterval) return;

    if (trailsRef.current.length >= maxTrails) {
      trailsRef.current.shift();
    }

    const rotation = trailRotation ? Math.random() * 20 - 10 : 0;

    trailsRef.current.push({
      x: mousePosRef.current.x,
      y: mousePosRef.current.y,
      startTime: timestamp,
      rotation: rotation,
      scale: trailScale,
      currentFrame: 0,
      lastFrameUpdate: timestamp,
      animationCompleted: false
    });

    lastTrailTimeRef.current = timestamp;
  }, [trailEnabled, spritesheetLoaded, trailInterval, maxTrails, trailRotation, trailScale]);

  // 计算当前帧
  const getCurrentFrameInfo = useCallback((trail, timestamp) => {
    if (!spritesheetCacheRef.current || trail.animationCompleted) return null;

    const frameElapsed = timestamp - trail.lastFrameUpdate;

    if (frameElapsed >= spriteConfig.frameRate) {
      trail.currentFrame += 1;
      trail.lastFrameUpdate = timestamp;

      if (trail.currentFrame >= spriteConfig.totalFrames) {
        trail.animationCompleted = true;
        return null;
      }
    }

    const sx = trail.currentFrame * spriteConfig.frameWidth;
    const sy = 0;

    return {
      sx,
      sy,
      frameWidth: spriteConfig.frameWidth,
      frameHeight: spriteConfig.frameHeight,
      currentFrame: trail.currentFrame,
      totalFrames: spriteConfig.totalFrames
    };
  }, [spriteConfig.frameRate, spriteConfig.totalFrames, spriteConfig.frameWidth, spriteConfig.frameHeight]);

  // 绘制拖尾
  const drawTrails = useCallback((ctx, timestamp) => {
    if (!spritesheetCacheRef.current) return;

    const originalImageSmoothingEnabled = ctx.imageSmoothingEnabled;

    if (pixelPerfectScaling) {
      ctx.imageSmoothingEnabled = false;
    }

    trailsRef.current = trailsRef.current.filter(trail => {
      if (trail.animationCompleted) return false;

      const frameInfo = getCurrentFrameInfo(trail, timestamp);
      if (!frameInfo) return false;

      try {
        ctx.save();
        ctx.globalAlpha = trailOpacity;
        ctx.translate(trail.x, trail.y);

        if (trail.rotation !== 0) {
          ctx.rotate(trail.rotation * Math.PI / 180);
        }

        const finalScale = trailScale * pixelScaleMultiplier;
        const pixelScale = pixelPerfectScaling ? Math.max(1, Math.round(finalScale)) : finalScale;

        ctx.scale(pixelScale, pixelScale);

        ctx.drawImage(
          spritesheetCacheRef.current,
          frameInfo.sx, frameInfo.sy, frameInfo.frameWidth, frameInfo.frameHeight,
          -spriteConfig.frameWidth / 2, -spriteConfig.frameHeight / 2,
          spriteConfig.frameWidth, spriteConfig.frameHeight
        );

        ctx.restore();
      } catch (error) {
        console.warn('雪碧图绘制失败:', error);
        return false;
      }

      return true;
    });

    ctx.imageSmoothingEnabled = originalImageSmoothingEnabled;
  }, [
    trailOpacity,
    getCurrentFrameInfo,
    spriteConfig.frameWidth,
    spriteConfig.frameHeight,
    trailScale,
    pixelPerfectScaling,
    pixelScaleMultiplier
  ]);

  // 动画循环
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    if (pixelPerfectScaling) {
      ctx.imageSmoothingEnabled = false;
    }

    const draw = timestamp => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 绘制火花
      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      // 生成拖尾
      generateTrail(timestamp);

      // 绘制拖尾
      drawTrails(ctx, timestamp);

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [
    sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale,
    trailEnabled, generateTrail, drawTrails, pixelPerfectScaling
  ]);

  // 清理
  useEffect(() => {
    return () => {
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, []);

  // 点击处理 - 修复坐标转换
  const handleClick = useCallback((e) => {
    const isExcluded = excludeSelectors.some(selector =>
      e.target.closest(selector) !== null
    );

    if (isExcluded) return;

    // 使用统一的坐标转换函数
    const { x, y } = getCanvasCoordinates(e.clientX, e.clientY);

    console.log('点击坐标:', {
      clientX: e.clientX,
      clientY: e.clientY,
      canvasX: x,
      canvasY: y
    });

    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }));

    sparksRef.current.push(...newSparks);
  }, [excludeSelectors, getCanvasCoordinates, sparkCount]);

  return (
    <div
      ref={containerRef}
      className="clickspark-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: customCursor ? 'none' : 'auto'
      }}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          userSelect: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          imageRendering: pixelPerfectScaling ? 'pixelated' : 'auto'
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        onClick={handleClick}
      >
        {children}
      </div>
    </div>
  );
};

export default ClickSpark;