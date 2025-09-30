import sidebarWindowImage from '../assets/sidebar_window.png';
import chatButtonImage from '../assets/sidebar_chat_button.png';
import profileButtonImage from '../assets/sidebar_profile_button.png'
import gamedevButtonImage from '../assets/sidebar_gamedev_button.png';
import paintingButtonImage from '../assets/sidebar_painting_button.png';
import musicButtonImage from '../assets/sidebar_music_button.png';
import PixelArt from './PixelArt';
import ImageButton from './ImageButton';
import './Sidebar.css';

export function Sidebar({ setActiveScreen, activeScreen }) {
  const menuItems = [
    { id: 'profile', label: 'profile', image: profileButtonImage, hover: profileButtonImage, click: profileButtonImage, activeImage: profileButtonImage },
    { id: 'chat', label: 'chat', image: chatButtonImage, hover: chatButtonImage, click: chatButtonImage, activeImage: chatButtonImage },
    { id: 'gamedev', label: 'gamedev', image: gamedevButtonImage, hover: gamedevButtonImage, click: gamedevButtonImage, activeImage: gamedevButtonImage },
    { id: 'painting', label: 'painting', image: paintingButtonImage, hover: paintingButtonImage, click: paintingButtonImage, activeImage: paintingButtonImage },
    { id: 'music', label: 'music', image: musicButtonImage, hover: musicButtonImage, click: musicButtonImage, activeImage: musicButtonImage }
  ];

  return (
    <div className="sidebar-container">
      <PixelArt className="sidebar-window" src={sidebarWindowImage} />
      <div className="sidebar-list">
        {menuItems.map(item => (
          <div className="sidebar-list-button" key={item.id}>
            <ImageButton
              normalImage={item.image}
              hoverImage={item.hover}
              clickImage={item.click}
              activeImage={item.activeImage}
              onClick={() => setActiveScreen(item.id)}
              isActive={activeScreen === item.id}
              width={92}
              height={80}
              top={10}  // (100 - 80) / 2 = 10
              left={4} // (100 - 90) / 2 = 5
            />
          </div>
        ))}
      </div>
    </div>
  )
}