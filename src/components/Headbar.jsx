// components/Headbar.jsx
import './Headbar.css';
import languageButtonZHImage from '../assets/language_button_zh.png';
import languageButtonENImage from '../assets/language_button_en.png';
import languageButtonJAImage from '../assets/language_button_ja.png';
import { useLanguage } from './LanguageContext';
import ImageButton from './ImageButton';

export function Headbar() {
  const { userLanguage, setUserLanguage } = useLanguage();

  const languages = [
    { id: 'en', code: 'en', image: languageButtonENImage, alt: 'English' },
    { id: 'zh', code: 'zh', image: languageButtonZHImage, alt: '中文' },
    { id: 'ja', code: 'ja', image: languageButtonJAImage, alt: '日本語' }
  ];

  return (
    <div className="headbar">
      <div className="language-switcher">
        {languages.map(item => (
          <ImageButton
            key={item.id}
            className="language_button"
            normalImage={item.image}
            activeImage={item.activeImage}
            onClick={() => setUserLanguage(item.code)}
            align="end"
            justify='end'
            width={70}
            height={60}
            top={20}
            left={15}
          />
        ))}
      </div>
    </div>
  );
}