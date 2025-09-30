import './ProfileScreen.css';
import profileWindowImage from '../../../assets/profile_window.png';
import profileTwitterButtonImage from '../../../assets/profile_twitter_button.png';
import profileItchButtonImage from '../../../assets/profile_itch_button.png';
import profilePatreonButtonImage from '../../../assets/profile_patreon_button.png';
import profileBilibiliButtonImage from '../../../assets/profile_bilibili_button.png';
import profileYoutubeButtonImage from '../../../assets/profile_youtube_button.png';
import profileGithubButtonImage from '../../../assets/profile_github_button.png';
import heartButtonImage from '../../../assets/profile_heart_button.png';
import heartButtonActiveImage from '../../../assets/profile_heart_button_active.png';
import PixelArt from '../../PixelArt';
import ImageButton from '../../ImageButton';
import { useLanguage } from '../../LanguageContext';
import profileData from '../../../data/profileData.json';
import { useState, useEffect } from 'react';

export function ProfileScreen() {
  const { userLanguage } = useLanguage();
  const [hasLiked, setHasLiked] = useState(false);

  // 从 localStorage 加载点赞状态
  useEffect(() => {
    const savedHasLiked = localStorage.getItem('profileHasLiked');
    if (savedHasLiked) {
      setHasLiked(JSON.parse(savedHasLiked));
    }
  }, []);

  // 图片映射
  const buttonImages = {
    twitter: profileTwitterButtonImage,
    itch: profileItchButtonImage,
    patreon: profilePatreonButtonImage,
    bilibili: profileBilibiliButtonImage,
    youtube: profileYoutubeButtonImage,
    github: profileGithubButtonImage
  };

  // 处理按钮数据，添加图片信息
  const profileButtons = profileData.buttons.map(button => ({
    ...button,
    image: buttonImages[button.id],
    hover: buttonImages[button.id],
    click: buttonImages[button.id],
    activeImage: buttonImages[button.id]
  }));

  const languageStyles = {
    "zh": {
      fontSize: "0.88vw",
      letterSpacing: "0.15vw",
      lineHeight: "1.6",
      titleFontSize: "1.2vw",
      titleLetterSpacing: "0.1vw"
    },
    "en": {
      fontSize: "0.9vw",
      letterSpacing: "0.02vw",
      lineHeight: "1.1",
      titleFontSize: "1.2vw",
      titleLetterSpacing: "0.05vw"
    },
    "ja": {
      fontSize: "0.9vw",
      letterSpacing: "0.1vw",
      lineHeight: "1.5",
      titleFontSize: "1.2vw",
      titleLetterSpacing: "0.05vw"
    }
  };

  const currentText = profileData.texts[userLanguage] || profileData.texts.en;
  const currentStyle = languageStyles[userLanguage] || languageStyles.en;

  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 处理 heart button 点击
  const handleHeartClick = () => {
    if (!hasLiked) {
      setHasLiked(true);
      // 保存到 localStorage
      localStorage.setItem('profileHasLiked', 'true');
    }
  };

  // 根据点击状态选择图片
  const getHeartButtonImage = () => {
    return hasLiked ? heartButtonActiveImage : heartButtonImage;
  };

  return (
    <div className="profile-container">
      <div className="profile-text-container">
        <div className="profile-text1">
          <div className="profile-text1-1">
            <div className="profile-text1-1-box">
              <div
                className='profile-text1-1-box-text'
                style={{
                  fontSize: currentStyle.fontSize,
                  letterSpacing: currentStyle.letterSpacing,
                  lineHeight: currentStyle.lineHeight
                }}
              >
                {currentText.intro.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < currentText.intro.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="profile-text1-2">
            <div className="profile-text1-2-box">
              <div
                style={{
                  fontSize: currentStyle.fontSize,
                  letterSpacing: currentStyle.letterSpacing,
                  lineHeight: currentStyle.lineHeight
                }}
              >
                {currentText.pixelArt}
              </div>
            </div>
          </div>
          <div className="profile-text1-3">
            <div className="profile-text1-3-box">
              <ImageButton
                key={'heart'}
                normalImage={getHeartButtonImage()}
                hoverImage={getHeartButtonImage()}
                clickImage={getHeartButtonImage()}
                activeImage={getHeartButtonImage()}
                onClick={handleHeartClick}
                disabled={hasLiked}
                width={44}
                height={50}
                top={25}
                left={28}
              />
            </div>
          </div>
        </div>
        <div className="profile-text2">
          {profileButtons.map(item => (
            <div className="profile_button" key={item.id}>
              <ImageButton
                normalImage={item.image}
                hoverImage={item.hover}
                clickImage={item.click}
                activeImage={item.activeImage}
                onClick={() => handleButtonClick(item.url)}
                width={82}
                height={74}
                top={13}
                left={9}
              />
            </div>
          ))}
        </div>
        <div className="profile-text3">
          <div className="profile-text3-1">
            <div className="profile-text3-1-1">
              <div
                className="profile-text3-1-1-title"
                style={{
                  fontSize: currentStyle.titleFontSize,
                  letterSpacing: currentStyle.titleLetterSpacing
                }}
              >
                {currentText.aboutDrawing.title}
              </div>
              <div className="profile-text3-1-1-box">
                <div
                  className='profile-text3-1-1-box-text'
                  style={{
                    fontSize: currentStyle.fontSize,
                    letterSpacing: currentStyle.letterSpacing,
                    lineHeight: currentStyle.lineHeight
                  }}
                >
                  {currentText.aboutDrawing.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < currentText.aboutDrawing.content.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="profile-text3-1-2">
              <div
                className="profile-text3-1-2-title"
                style={{
                  fontSize: currentStyle.titleFontSize,
                  letterSpacing: currentStyle.titleLetterSpacing
                }}
              >
                {currentText.aboutGames.title}
              </div>
              <div className="profile-text3-1-2-box">
                <div
                  className='profile-text3-1-2-box-text'
                  style={{
                    fontSize: currentStyle.fontSize,
                    letterSpacing: currentStyle.letterSpacing,
                    lineHeight: currentStyle.lineHeight
                  }}
                >
                  {currentText.aboutGames.content.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < currentText.aboutGames.content.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="profile-text3-2">
            <div className="profile-text3-2-1">
              <div
                className="profile-text3-2-1-title"
                style={{
                  fontSize: currentStyle.titleFontSize,
                  letterSpacing: currentStyle.titleLetterSpacing
                }}
              >
                {currentText.contact.title}
              </div>
              <div className="profile-text3-2-1-box">
                <div
                  className='profile-text3-2-1-box-text'
                  style={{
                    fontSize: currentStyle.fontSize,
                    letterSpacing: currentStyle.letterSpacing,
                    lineHeight: currentStyle.lineHeight
                  }}
                >
                  {currentText.contact.content}
                </div>
              </div>
            </div>
            <div className="profile-text3-2-2">
              <div className="profile-text3-2-2-box">
                3-2-2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-window">
        <PixelArt src={profileWindowImage} />
      </div>
    </div>
  );
}