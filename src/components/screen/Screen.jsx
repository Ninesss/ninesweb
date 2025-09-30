import screenWindowImage from '../../assets/screen_window.png';
import PixelArt from '../PixelArt';
import { ChatScreen } from './chat/ChatScreen';
import { ProfileScreen } from './profile/ProfileScreen';
import { GameDevScreen } from './gamedev/GameDevScreen';
import { PaintingScreen } from './painting/PaintingScreen';
import { MusicScreen } from './music/MusicScreen';

import './Screen.css';

export function Screen({ activeScreen }) {
  const screenComponents = {
    profile: ProfileScreen,
    chat: ChatScreen,
    gamedev: GameDevScreen,
    painting: PaintingScreen,
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