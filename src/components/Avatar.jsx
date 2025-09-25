import './Avatar.css'
import avatarWindowImage from '../assets/avatar_window.png';
import avatarImage from '../assets/avatar.png';
import PixelArt from './PixelArt';

export function Avatar() {
  return (
    <div className="avatar-container">
      <PixelArt className="avatar-base" src={avatarImage} />
      <PixelArt className="avatar-window" src={avatarWindowImage} />
    </div>
  )
}