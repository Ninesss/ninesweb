import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { LanguageProvider } from './components/LanguageContext'

function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="test" element={<>test</>} />
        </Routes>
      </LanguageProvider>
    </>
  )
}

export default App