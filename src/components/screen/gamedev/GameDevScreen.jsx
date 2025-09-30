import './GameDevScreen.css';
import { useState } from 'react';
import gamedevWindowImage from '../../../assets/gamedev_window.png';
import gamedevListButtonImage from '../../../assets/gamedev_list_button.png';
import gamedevListButtonActiveImage from '../../../assets/gamedev_list_button_active.png';
import PixelArt from '../../PixelArt';
import ImageButton from '../../ImageButton';
import { useLanguage } from '../../../components/LanguageContext';
import gameDevData from '../../../data/gameDevData.json';
import { GameDevButtonTitle } from './GameDevButtonTitle';
import { GameDevPage } from './GameDevPage';

export function GameDevScreen() {
  const [activeButtonId, setActiveButtonId] = useState(null);
  const { userLanguage } = useLanguage();

  // 直接从 JSON 获取页面数据
  const currentPages = gameDevData.pages[userLanguage] || gameDevData.pages.en;

  // 处理数据，添加图片信息
  const gamedevPages = currentPages.map(page => ({
    ...page,
    image: gamedevListButtonImage,
    hover: gamedevListButtonImage,
    click: gamedevListButtonImage,
    activeImage: gamedevListButtonActiveImage
  }));

  // 获取当前 active 按钮的内容
  const activeContent = gamedevPages.find(item => item.id === activeButtonId)?.content || '';

  const handleMouseEnter = (buttonId) => {
    setActiveButtonId(buttonId);
  };

  return (
    <div className="gamedev-screen-container">
      <div className='gamedev-screen-list-container'>
        <div className='gamedev-screen-list'>
          <div className="gamedev_list_button">
            {gamedevPages.map(item => (
              <div key={item.id} className="gamedev-button-item">
                <GameDevButtonTitle
                  gamename={item.gamename}
                  title={item.title}
                  createTime={item.createTime}
                />
                <ImageButton
                  normalImage={item.image}
                  hoverImage={item.hover}
                  clickImage={item.click}
                  activeImage={item.activeImage}
                  isActive={activeButtonId === item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  hoverScale={1}
                  clickScale={1}
                  activeScale={1}
                  width={90}
                  left={1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='gamedev-screen-content-container'>
        <GameDevPage content={activeContent} />
      </div>
      <div className='gamedev-screen-window'>
        <PixelArt src={gamedevWindowImage} />
      </div>
    </div>
  );
}