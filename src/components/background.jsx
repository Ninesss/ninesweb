import PixelBlast from '../reactBitsComponents/PixelBlast';
import LetterGlitch from '../reactBitsComponents/LetterGlitch';
import EdgeFade from './EdgeFade';


export function Background({ interactive = false }) {
  return (
    <div
      style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden', pointerEvents: interactive ? 'auto' : 'none' }}
    >
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#203562"
        patternScale={3}
        patternDensity={1.5}
        pixelSizeJitter={1.5}
        enableRipples
        rippleSpeed={0.5}
        rippleThickness={0.08}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0}
        liquidRadius={0}
        liquidWobbleSpeed={0.5}
        speed={0.5}
        edgeFade={0}
        transparent
        interactive={interactive}
      />
      {/* Edge fade overlay sits above the PixelBlast and below UI */}
      <EdgeFade color="#201533" strength={0.05} />
    </div>
  )
} 