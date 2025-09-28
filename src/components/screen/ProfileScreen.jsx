import './ProfileScreen.css';
import profileWindowImage from '../../assets/profile_window.png';
import profileTwitterButtonImage from '../../assets/profile_twitter_button.png';
import profileItchButtonImage from '../../assets/profile_itch_button.png';
import profilePatreonButtonImage from '../../assets/profile_patreon_button.png';
import profileBilibiliButtonImage from '../../assets/profile_bilibili_button.png';
import profileYoutubeButtonImage from '../../assets/profile_youtube_button.png';
import profileGithubButtonImage from '../../assets/profile_github_button.png';
import heartButtonImage from '../../assets/profile_heart_button.png'
import PixelArt from '../PixelArt';
import ImageButton from '../ImageButton';

export function ProfileScreen() {
  const profileButtons = [
    { id: 'twitter', label: 'twitter', image: profileTwitterButtonImage, hover: profileTwitterButtonImage, click: profileTwitterButtonImage, activeImage: profileTwitterButtonImage, url: 'https://x.com/Nines7968569576' },
    { id: 'itch', label: 'itch', image: profileItchButtonImage, hover: profileItchButtonImage, click: profileItchButtonImage, activeImage: profileItchButtonImage, url: 'https://itch.io/profile/ninesss' },
    { id: 'patreon', label: 'patreon', image: profilePatreonButtonImage, hover: profilePatreonButtonImage, click: profilePatreonButtonImage, activeImage: profilePatreonButtonImage, url: 'https://patreon.com/Ninesss?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' },
    { id: 'bilibili', label: 'bilibili', image: profileBilibiliButtonImage, hover: profileBilibiliButtonImage, click: profileBilibiliButtonImage, activeImage: profileBilibiliButtonImage, url: 'https://space.bilibili.com/515430' },
    { id: 'youtube', label: 'youtube', image: profileYoutubeButtonImage, hover: profileYoutubeButtonImage, click: profileYoutubeButtonImage, activeImage: profileYoutubeButtonImage, url: 'https://www.youtube.com/@nines1407' },
    { id: 'github', label: 'github', image: profileGithubButtonImage, hover: profileGithubButtonImage, click: profileGithubButtonImage, activeImage: profileGithubButtonImage, url: 'https://github.com/Ninesss' },
  ];

  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="profile-container">
      <div className="profile-text-container">
        <div className="profile-text1">
          <div className="profile-text1-1">
            <div className="profile-text1-1-box">
              1-1
            </div>
          </div>
          <div className="profile-text1-2">
            <div className="profile-text1-2-box">
              1-2
            </div>
          </div>
          <div className="profile-text1-3">
            <div className="profile-text1-3-box">
              <ImageButton
                key={'heart'}
                className="profile_button"
                normalImage={heartButtonImage}
                hoverImage={heartButtonImage}
                clickImage={heartButtonImage}
                activeImage={heartButtonImage}
                width={60}
                height={80}
                top={10}  // (100 - 80) / 2 = 10
                left={20} // (100 - 60) / 2 = 20
              />
            </div>
          </div>
        </div>
        <div className="profile-text2">
          {profileButtons.map(item => (
            <ImageButton
              key={item.id}
              className="profile_button"
              normalImage={item.image}
              hoverImage={item.hover}
              clickImage={item.click}
              activeImage={item.activeImage}
              onClick={() => handleButtonClick(item.url)}
              width={84}
              height={80}
              top={10}  // (100 - 80) / 2 = 10
              left={8} // (100 - 84) / 2 = 8
            />
          ))}
        </div>
        <div className="profile-text3">
          <div className="profile-text3-1">
            <div className="profile-text3-1-1">
              <div className="profile-text3-1-1-box">
                3-1-1
              </div>
            </div>
            <div className="profile-text3-1-2">
              <div className="profile-text3-1-2-box">
                3-1-2
              </div>
            </div>
          </div>
          <div className="profile-text3-2">
            <div className="profile-text3-2-1">
              <div className="profile-text3-2-1-box">
                3-2-1
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