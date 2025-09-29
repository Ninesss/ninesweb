import './HomePage.css';
import { Background } from '../components/Background';
import { Sidebar } from '../components/Sidebar';
import { Avatar } from '../components/Avatar';
import { Screen } from '../components/screen/Screen';
import { Headbar } from '../components/Headbar';
import { useState } from 'react';

export function HomePage() {
  const [activeScreen, setActiveScreen] = useState('profile');

  return (
    <>
      <title>楽園</title>
      <div className='page-container'>
        <div className="content-container">
          <div className='headbar-container'>
            <Headbar />
          </div>
          <div className="stack-container">
            <div className="sidebar-stack">
              <Avatar />
              <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            </div>
            <div className="screen-stack">
              <Screen activeScreen={activeScreen} />
            </div>
          </div>
          <div className='footer-container' >
            Please do not reprint without my permission.<br />
            Copyright © 2010-2025 Nines All Rights Reserved.
          </div>
        </div>
        <div>
          <Background interactive={true} />
        </div>
      </div>
    </>
  );
}