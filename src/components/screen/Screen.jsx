import screenWindowImage from '../../assets/screen_window.png';
import PixelArt from '../PixelArt';
import { ChatScreen } from './ChatScreen';
import { ProfileScreen } from './ProfileScreen';
import { GameDevScreen } from './GameDevScreen';
import { PaintScreen } from './PaintScreen';
import { MusicScreen } from './MusicScreen';

import './Screen.css';

export function Screen({ activeScreen }) {
  const screenComponents = {
    chat: ChatScreen,
    profile: ProfileScreen,
    gamedev: GameDevScreen,
    paint: PaintScreen,
    music: MusicScreen
  };
  const CurrentScreen = screenComponents[activeScreen] || ChatScreen;

  return (
    <div className="screen-container">
      <PixelArt className="screen-window" src={screenWindowImage} />
      <div className="screen-content">
        <CurrentScreen />
      </div>
    </div>
  )
} 