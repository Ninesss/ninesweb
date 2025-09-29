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
import { useLanguage } from '../../components/LanguageContext';

export function ProfileScreen() {
  const { userLanguage } = useLanguage();

  const profileButtons = [
    { id: 'twitter', label: 'twitter', image: profileTwitterButtonImage, hover: profileTwitterButtonImage, click: profileTwitterButtonImage, activeImage: profileTwitterButtonImage, url: 'https://x.com/Nines7968569576' },
    { id: 'itch', label: 'itch', image: profileItchButtonImage, hover: profileItchButtonImage, click: profileItchButtonImage, activeImage: profileItchButtonImage, url: 'https://itch.io/profile/ninesss' },
    { id: 'patreon', label: 'patreon', image: profilePatreonButtonImage, hover: profilePatreonButtonImage, click: profilePatreonButtonImage, activeImage: profilePatreonButtonImage, url: 'https://www.patreon.com/c/Ninesss' },
    { id: 'bilibili', label: 'bilibili', image: profileBilibiliButtonImage, hover: profileBilibiliButtonImage, click: profileBilibiliButtonImage, activeImage: profileBilibiliButtonImage, url: 'https://space.bilibili.com/515430' },
    { id: 'youtube', label: 'youtube', image: profileYoutubeButtonImage, hover: profileYoutubeButtonImage, click: profileYoutubeButtonImage, activeImage: profileYoutubeButtonImage, url: 'https://www.youtube.com/@nines1407' },
    { id: 'github', label: 'github', image: profileGithubButtonImage, hover: profileGithubButtonImage, click: profileGithubButtonImage, activeImage: profileGithubButtonImage, url: 'https://github.com/Ninesss' },
  ];

  // 语言特定的样式配置
  const languageStyles = {
    "zh": {
      fontSize: "0.88vw",
      letterSpacing: "0.15vw",
      lineHeight: "1.6",
      titleFontSize: "1.5vw",
      titleLetterSpacing: "0.1vw"
    },
    "en": {
      fontSize: "0.9vw",
      letterSpacing: "0.02vw",
      lineHeight: "1.1",
      titleFontSize: "1.3vw",
      titleLetterSpacing: "0.05vw"
    },
    "ja": {
      fontSize: "0.9vw",
      letterSpacing: "0.1vw",
      lineHeight: "1.5",
      titleFontSize: "1.4vw",
      titleLetterSpacing: "0.05vw"
    }
  };

  const profileTexts = {
    "zh": {
      intro: `我喜欢画画，制作独立游戏和制作网页(=^ω^=)\n（对什么都感兴趣，学的有点杂...）\n动手制作一些能表达自己的东西会让我非常兴奋与快乐。\n我想要制作与众不同能带来新鲜感的游戏。\n目前正在制作一款独立肉鸽游戏，希望大家能喜欢！`,
      pixelArt: "此处像素图片施工中...",
      aboutDrawing: {
        title: "关于画画：",
        content: "我喜欢画绿色头发的女孩和可爱的龙娘。\n我很喜欢复古的风格！\n最近也在尝试像素画和低面像素模型。"
      },
      aboutGames: {
        title: "关于游戏：",
        content: "练习时长两年半的独立游戏制作人。\n永远无法拒绝的游戏类型：卡牌肉鸽游戏和JRPG\n最近在学习国际象棋。"
      },
      contact: {
        title: "如何联系：",
        content: "如果想要与我进一步接触，请使用邮件：ninessswork@gmail.com"
      }
    },
    "en": {
      intro: `I love drawing, making indie games and creating websites (=^ω^=)\n(I'm interested in everything and my learning is a bit scattered...)\nCreating things that express myself makes me very excited and happy.\nI want to create unique games that bring a fresh experience.\nCurrently working on an indie roguelike game, hope everyone will like it!`,
      pixelArt: "Pixel art under construction...",
      aboutDrawing: {
        title: "About Drawing:",
        content: "I love drawing green-haired girls and cute dragon girls.\nI really love retro style! \nRecently trying pixel art and low-poly pixel models."
      },
      aboutGames: {
        title: "About Games:",
        content: "Indie game developer with 2.5 years of practice.\nGame genres I can never resist: card roguelikes and JRPGs\nRecently learning chess."
      },
      contact: {
        title: "Contact:",
        content: "If you want to get in touch with me further, please use email: ninessswork@gmail.com"
      }
    },
    "ja": {
      intro: `私は絵を描くこと、インディーゲーム制作、ウェブサイト制作が好きです(=^ω^=)\n（何にでも興味があって、学ぶことが少し雑多です...）\n自分を表現できるものを作ることに非常に興奮と喜びを感じます。\n新鮮な感覚をもたらす独自のゲームを作りたいです。\n現在インディーローグライクゲームを制作中です、皆さんに気に入っていただければ嬉しいです！`,
      pixelArt: "ここのピクセル画像は工事中...",
      aboutDrawing: {
        title: "絵について：",
        content: "緑色の髪の女の子と可愛いドラゴン娘を描くのが好きです。\nレトロなスタイルが大好き！\n最近はピクセルアートとローポリピクセルモデルにも挑戦しています。"
      },
      aboutGames: {
        title: "ゲームについて：",
        content: "練習期間2年半のインディーゲーム制作者。\n決して断れないゲームジャンル：カードローグライクとJRPG\n最近チェスを学んでいます。"
      },
      contact: {
        title: "連絡方法：",
        content: "さらに私と接触したい場合は、メールをご利用ください：ninessswork@gmail.com"
      }
    }
  };

  const currentText = profileTexts[userLanguage] || profileTexts.en;
  const currentStyle = languageStyles[userLanguage] || languageStyles.en;

  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
                className="profile_button"
                normalImage={heartButtonImage}
                hoverImage={heartButtonImage}
                clickImage={heartButtonImage}
                activeImage={heartButtonImage}
                width={60}
                height={80}
                top={10}
                left={20}
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
              width={82}
              height={74}
              top={13}
              left={9}
            />
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
            {/* 删除了 language-switcher 部分 */}
            <div className="profile-text3-2-2">
              <div className="profile-text3-2-2-box">
                {/* 这里可以放置其他内容，或者完全删除这个 div */}
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