import './PaintingScreen.css';
import Masonry from '../../../reactBitsComponents/Masonry';
import paintingsData from '../../../data/paintingData.json';
import { useLanguage } from '../../LanguageContext';

export function PaintingScreen() {
  const { userLanguage } = useLanguage();

  // 按时间排序（最新的在前），并添加 ID，同时根据当前语言选择文本
  const sortedItems = paintingsData.paintings
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .map((item, index) => ({
      ...item,
      id: (index + 1).toString(),
      title: typeof item.title === 'object' ? item.title[userLanguage] || item.title.en : item.title,
      description: typeof item.description === 'object' ? item.description[userLanguage] || item.description.en : item.description
    }));

  return (
    <div className="painting-screen-container">
      <Masonry
        items={sortedItems}
        ease="power4.out"
        duration={0.6}
        stagger={0.1}
        animateFrom="center"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
}