import './HomePage.css';
import { Background } from '../components/Background';
import { Sidebar } from '../components/Sidebar';
import { Avatar } from '../components/Avatar';
import { Screen } from '../components/screen/Screen';
import { Headbar } from '../components/Headbar';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [activeScreen, setActiveScreen] = useState('profile');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初始检查
    checkScreenSize();

    // 监听窗口大小变化
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <title>楽園</title>
      <div className='page-container'>
        <div className="content-container">
          <div className='headbar-container'>
            <Headbar />
          </div>
          <div className={`stack-container ${isMobile ? 'mobile' : ''}`}>
            {!isMobile ? (
              // 桌面布局
              <>
                <div className="sidebar-stack">
                  <Avatar />
                  <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
                </div>
                <div className="screen-stack">
                  <Screen activeScreen={activeScreen} />
                </div>
              </>
            ) : (
              // 移动端布局
              <>
                <div className="mobile-header">
                  <Avatar />
                  <div className="mobile-sidebar">
                    <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
                  </div>
                </div>
                <div className="mobile-screen">
                  <Screen activeScreen={activeScreen} />
                </div>
              </>
            )}
          </div>
          <div className='footer-container' >
            Please do not reprint without my permission.<br />
            Copyright © 2010-2025 Nines All Rights Reserved.
          </div>
        </div>
        <div>
          <Background interactive={!isMobile} />
        </div>
      </div>
    </>
  );
}