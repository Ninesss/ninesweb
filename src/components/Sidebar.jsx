import sidebarWindowImage from '../assets/sidebar_window.png';
import gamedevButtonImage from '../assets/gamedev_button.png';
import gamedevButtonHoverImage from '../assets/gamedev_button_hover.png';
import PixelArt from './PixelArt';
import ImageButton from './ImageButton';
import './Sidebar.css';

export function Sidebar({ setActiveScreen, activeScreen }) {
  const menuItems = [
    { id: 'chat', label: 'chat', image: gamedevButtonImage, hover: gamedevButtonHoverImage, click: gamedevButtonHoverImage, activeImage: gamedevButtonHoverImage },
    { id: 'profile', label: 'profile', image: gamedevButtonImage, hover: gamedevButtonHoverImage, click: gamedevButtonHoverImage, activeImage: gamedevButtonHoverImage },
    { id: 'gamedev', label: 'gamedev', image: gamedevButtonImage, hover: gamedevButtonHoverImage, click: gamedevButtonHoverImage, activeImage: gamedevButtonHoverImage },
    { id: 'paint', label: 'paint', image: gamedevButtonImage, hover: gamedevButtonHoverImage, click: gamedevButtonHoverImage, activeImage: gamedevButtonHoverImage },
    { id: 'music', label: 'music', image: gamedevButtonImage, hover: gamedevButtonHoverImage, click: gamedevButtonHoverImage, activeImage: gamedevButtonHoverImage }
  ];

  return (
    <div className="sidebar-container">
      <PixelArt className="sidebar-window" src={sidebarWindowImage} />
      <div className="sidebar-list">
        {menuItems.map(item => (
          <ImageButton
            key={item.id}
            normalImage={item.image}
            hoverImage={item.hover}
            clickImage={item.click}
            activeImage={item.activeImage}
            onClick={() => setActiveScreen(item.id)}
            isActive={activeScreen === item.id}
            activeScale={1.05}
          />
        ))}
      </div>
    </div>
  )
}