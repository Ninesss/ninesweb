import React from 'react';

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

export function EdgeFade({ color = '#000000', strength = 0.6, style: userStyle = {} }) {
  // strength: 0 (no fade) .. 1 (strong fade)
  const s = Math.max(0, Math.min(1, strength));
  // inner transparent radius in percent (10..80)
  const [r, g, b] = hexToRgb(color || '#000000');
  // strength 0..1 -> fadePercent 5..50 (how far inward the fade reaches)
  const fadePercent = Math.round(5 + s * 45);
  // four linear gradients, one for each edge. Opaque at the edge (0%), transparent at fadePercent% inward.
  const top = `linear-gradient(to bottom, rgba(${r}, ${g}, ${b}, 1) 0%, rgba(${r}, ${g}, ${b}, 0) ${fadePercent}%)`;
  const bottom = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1) 0%, rgba(${r}, ${g}, ${b}, 0) ${fadePercent}%)`;
  const left = `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 1) 0%, rgba(${r}, ${g}, ${b}, 0) ${fadePercent}%)`;
  const right = `linear-gradient(to left, rgba(${r}, ${g}, ${b}, 1) 0%, rgba(${r}, ${g}, ${b}, 0) ${fadePercent}%)`;

  const style = {
    position: 'fixed',
    inset: 0,
    zIndex: 1,
    pointerEvents: 'none',
    backgroundImage: `${top}, ${bottom}, ${left}, ${right}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    // ensure it sits above the background but below UI elements that have higher z-index
    mixBlendMode: 'normal',
    ...userStyle
  };

  return <div aria-hidden={true} style={style} />;
}

export default EdgeFade;
