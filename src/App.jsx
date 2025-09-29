import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { LanguageProvider } from './components/LanguageContext'
import ClickSpark from './components/ClickSpark'

function App() {
  return (
    <>
      <ClickSpark
        customCursor="/cursor.png"
        pointerCursor="/cursor_pointer.png"
        textCursor="/cursor_text.png"
        debug={true}
        cursorHotspot={[16, 16]}
      >
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="test" element={<>test</>} />
          </Routes>

        </LanguageProvider>
      </ClickSpark>
    </>
  )
}

export default App