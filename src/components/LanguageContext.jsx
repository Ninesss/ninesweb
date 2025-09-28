// components/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage || "en";
    const isChinese = browserLanguage.startsWith("zh");
    setUserLanguage(isChinese ? "zh" : "en");
  }, []);

  return (
    <LanguageContext.Provider value={{ userLanguage, setUserLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};