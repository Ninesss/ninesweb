import './HomePage.css';
import { Background } from '../components/Background';
import { Sidebar } from '../components/Sidebar';
import { Avatar } from '../components/Avatar';
import { Screen } from '../components/screen/Screen';
import { useState } from 'react';

export function HomePage() {
  const [activeScreen, setActiveScreen] = useState('chat');

  return (
    <div className='content-container'>
      <title>楽園</title>
      <div className="content">
        <div className="sidebar-stack">
          <Avatar />
          <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        </div>
        <div className="screen-stack">
          <Screen activeScreen={activeScreen} />
        </div>
        <div>
          <Background interactive={true} />
        </div>
      </div>
    </div>
  );
}