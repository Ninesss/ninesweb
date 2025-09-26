import './PaintScreen.css';
import Masonry from '../../reactBitsComponents/Masonry';

export function PaintScreen() {
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      title: "山景", // 简洁的标题
      description: "黑白山脉风景，光影对比强烈", // 简洁的描述
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      title: "森林小径",
      description: "幽静的森林小路，充满神秘感",
      height: 250,
    },
    // ... 更多
  ];

  return (
    <div className="paint-screen-container">
      <Masonry
        items={items}
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