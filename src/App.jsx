import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { LanguageProvider } from './components/LanguageContext'
import ClickSpark from './components/ClickSpark'

function App() {
  return (
    <ClickSpark
      customCursor="/cursor.png"
      pointerCursor="/cursor_pointer.png"
      textCursor="/cursor_text.png"
      cursorHotspot={[16, 16]}
      spritesheetUrl="/cursor_star_spritesheet.png"
      spriteConfig={{
        frameWidth: 31,
        frameHeight: 31,
        frameRate: 20
      }}
      trailInterval={30}
      trailOpacity={0.8}
      trailScale={2}
      trailRotation={true}
    >
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="test" element={<>test</>} />
        </Routes>
      </LanguageProvider>
    </ClickSpark>
  )
}

export default App