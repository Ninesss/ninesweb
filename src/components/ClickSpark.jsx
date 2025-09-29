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
  children
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sparksRef = useRef([]);
  const startTimeRef = useRef(null);
  const [cursorLoaded, setCursorLoaded] = useState({
    default: false,
    pointer: false,
    text: false
  });
  const [cursorErrors, setCursorErrors] = useState({
    default: false,
    pointer: false,
    text: false
  });

  // 预加载光标图片
  useEffect(() => {
    const loadImage = (url, type) => {
      return new Promise((resolve) => {
        if (!url) {
          setCursorErrors(prev => ({ ...prev, [type]: true }));
          resolve(false);
          return;
        }

        const img = new Image();
        img.onload = () => {
          setCursorLoaded(prev => ({ ...prev, [type]: true }));
          resolve(true);
        };
        img.onerror = () => {
          setCursorErrors(prev => ({ ...prev, [type]: true }));
          resolve(false);
        };
        img.src = url;
      });
    };

    const loadCursors = async () => {
      const loads = [];
      if (customCursor) loads.push(loadImage(customCursor, 'default'));
      if (pointerCursor) loads.push(loadImage(pointerCursor, 'pointer'));
      if (textCursor) loads.push(loadImage(textCursor, 'text'));
      await Promise.all(loads);
    };

    loadCursors();
  }, [customCursor, pointerCursor, textCursor]);

  // 设置光标样式
  useEffect(() => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    let cssRules = [];
    const hotspotX = cursorHotspot[0] + offsetX;
    const hotspotY = cursorHotspot[1] + offsetY;

    if (customCursor && !cursorErrors.default) {
      cssRules.push(`
        .clickspark-container * {
          cursor: url('${customCursor}') ${hotspotX} ${hotspotY}, auto !important;
        }
      `);
    }

    if (pointerCursor && !cursorErrors.pointer) {
      cssRules.push(`
        .clickspark-container button,
        .clickspark-container a,
        .clickspark-container [role="button"],
        .clickspark-container [data-cursor="pointer"] {
          cursor: url('${pointerCursor}') ${hotspotX} ${hotspotY}, pointer !important;
        }
      `);
    } else if (customCursor && !cursorErrors.default) {
      cssRules.push(`
        .clickspark-container button,
        .clickspark-container a,
        .clickspark-container [role="button"],
        .clickspark-container [data-cursor="pointer"] {
          cursor: url('${customCursor}') ${hotspotX} ${hotspotY}, pointer !important;
        }
      `);
    }

    if (textCursor && !cursorErrors.text) {
      cssRules.push(`
        .clickspark-container input,
        .clickspark-container textarea,
        .clickspark-container [contenteditable="true"],
        .clickspark-container [data-cursor="text"] {
          cursor: url('${textCursor}') ${hotspotX} ${hotspotY}, text !important;
        }
      `);
    } else if (customCursor && !cursorErrors.default) {
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
  }, [customCursor, pointerCursor, textCursor, cursorErrors, cursorHotspot, offsetX, offsetY]);

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
      }
    };

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(parent);
    resizeCanvas();

    return () => ro.disconnect();
  }, []);

  const easeFunc = useCallback(
    t => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // 火花动画
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const draw = timestamp => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

  const handleClick = e => {
    const isExcluded = excludeSelectors.some(selector =>
      e.target.closest(selector) !== null
    );

    if (isExcluded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    const x = (rawX + offsetX) * scaleX;
    const y = (rawY + offsetY) * scaleY;

    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }));

    sparksRef.current.push(...newSparks);
  };

  return (
    <div
      ref={containerRef}
      className="clickspark-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'auto'
      }}
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
          zIndex: 9999
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